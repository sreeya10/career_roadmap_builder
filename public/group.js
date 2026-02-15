let currentGroupId = null;

async function loadGroups() {
    if (!isLoggedIn()) {
        document.querySelector('.group-container').innerHTML = `
            <h1 class="section-title">Study Groups</h1>
            <p class="section-subtitle">Please login to access study groups</p>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="login.html" class="btn btn-primary">Login</a>
            </div>
        `;
        return;
    }
    
    try {
        const data = await apiRequest('/group/my-groups');
        displayGroups(data.groups);
    } catch (error) {
        console.error('Error loading groups:', error);
    }
}

function displayGroups(groups) {
    const list = document.getElementById('groupsList');
    list.innerHTML = '';
    
    if (groups.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--light-text);">You haven\'t joined any groups yet. Create or join one to get started!</p>';
        return;
    }
    
    groups.forEach(group => {
        const card = document.createElement('div');
        card.className = 'group-card';
        card.innerHTML = `
            <h3>${group.name}</h3>
            <p>${group.members.length} members</p>
        `;
        card.onclick = () => showGroupDetails(group);
        list.appendChild(card);
    });
}

function showCreateGroupModal() {
    if (!isLoggedIn()) {
        alert('Please login to create a group');
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('createGroupModal').classList.add('active');
}

function hideCreateGroupModal() {
    document.getElementById('createGroupModal').classList.remove('active');
    document.getElementById('createGroupForm').reset();
}

function showJoinGroupModal() {
    if (!isLoggedIn()) {
        alert('Please login to join a group');
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('joinGroupModal').classList.add('active');
}

function hideJoinGroupModal() {
    document.getElementById('joinGroupModal').classList.remove('active');
    document.getElementById('joinGroupForm').reset();
}

async function createGroup(event) {
    event.preventDefault();
    
    const name = document.getElementById('groupNameInput').value;
    
    if (!name) {
        alert('Please enter a group name');
        return;
    }
    
    try {
        const data = await apiRequest('/group/create', {
            method: 'POST',
            body: JSON.stringify({ name })
        });
        
        hideCreateGroupModal();
        loadGroups();
        alert(`Group created! Invite code: ${data.group.inviteCode}`);
    } catch (error) {
        alert('Error creating group: ' + error.message);
    }
}

async function joinGroup(event) {
    event.preventDefault();
    
    const inviteCode = document.getElementById('joinInviteCode').value.toUpperCase();
    
    if (!inviteCode) {
        alert('Please enter an invite code');
        return;
    }
    
    try {
        await apiRequest('/group/join', {
            method: 'POST',
            body: JSON.stringify({ inviteCode })
        });
        
        hideJoinGroupModal();
        loadGroups();
        alert('Successfully joined group!');
    } catch (error) {
        alert('Error joining group: ' + error.message);
    }
}

async function showGroupDetails(group) {
    currentGroupId = group._id;
    
    document.getElementById('groupsList').style.display = 'none';
    document.querySelector('.group-actions').style.display = 'none';
    
    document.getElementById('groupName').textContent = group.name;
    document.getElementById('inviteCode').textContent = group.inviteCode;
    
    try {
        const data = await apiRequest(`/group/${group._id}/members`);
        displayMembers(data.members);
    } catch (error) {
        console.error('Error loading members:', error);
    }
    
    document.getElementById('groupDetails').style.display = 'block';
}

function hideGroupDetails() {
    document.getElementById('groupDetails').style.display = 'none';
    document.getElementById('groupsList').style.display = 'grid';
    document.querySelector('.group-actions').style.display = 'flex';
    currentGroupId = null;
}

function displayMembers(members) {
    const list = document.getElementById('membersList');
    list.innerHTML = '';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        
        const userId = localStorage.getItem('userId');
        const isCurrentUser = member.user._id === userId;
        
        if (member.hideProgress) {
            card.innerHTML = `
                <h4>${member.user.username}</h4>
                <p>Progress hidden</p>
                ${isCurrentUser ? '<button class="btn-small" onclick="togglePrivacy()">Show Progress</button>' : ''}
            `;
        } else {
            const skillsCount = member.user.completedSkills?.filter(s => s.career === member.user.primaryCareer).length || 0;
            const projectsCount = member.user.completedProjects?.filter(p => p.career === member.user.primaryCareer).length || 0;
            const streak = member.user.currentStreak || 0;
            
            card.innerHTML = `
                <h4>${member.user.username}</h4>
                <p>Career: ${member.user.primaryCareer || 'Not set'}</p>
                <p>Skills: ${skillsCount} | Projects: ${projectsCount}</p>
                <p>🔥 ${streak} day streak</p>
                ${isCurrentUser ? '<button class="btn-small" onclick="togglePrivacy()">Hide Progress</button>' : ''}
            `;
        }
        
        list.appendChild(card);
    });
}

async function togglePrivacy() {
    try {
        await apiRequest('/group/toggle-privacy', {
            method: 'POST',
            body: JSON.stringify({ groupId: currentGroupId })
        });
        
        const data = await apiRequest(`/group/${currentGroupId}/members`);
        displayMembers(data.members);
    } catch (error) {
        alert('Error toggling privacy: ' + error.message);
    }
}

function copyInviteCode() {
    const code = document.getElementById('inviteCode').textContent;
    navigator.clipboard.writeText(code);
    alert('Invite code copied!');
}

loadGroups();
