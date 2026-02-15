async function loadDashboard() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    
    const username = localStorage.getItem('username');
    document.getElementById('usernameDisplay').textContent = username;
    
    await loadUserData();
    await loadTimeData();
}

async function loadUserData() {
    try {
        const userData = await apiRequest('/auth/me');
        
        document.getElementById('currentStreak').textContent = userData.currentStreak || 0;
        document.getElementById('longestStreak').textContent = userData.longestStreak || 0;
        
        const skillsCount = userData.completedSkills.length;
        const projectsCount = userData.completedProjects.length;
        
        document.getElementById('skillsCount').textContent = skillsCount;
        document.getElementById('projectsCount').textContent = projectsCount;
        
        if (userData.primaryCareer) {
            displayPrimaryCareer(userData);
        }
        
        if (userData.savedCareers.length > 0) {
            displaySavedCareers(userData.savedCareers);
        }
        
        displayEncouragement(userData);
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

async function loadTimeData() {
    try {
        const dailyData = await apiRequest('/time/daily');
        const weeklyData = await apiRequest('/time/weekly');
        
        document.getElementById('todayTime').textContent = formatTime(dailyData.timeSpent);
        document.getElementById('weekTime').textContent = formatTime(weeklyData.weeklyTime);
    } catch (error) {
        console.error('Error loading time data:', error);
    }
}

function displayPrimaryCareer(userData) {
    const section = document.getElementById('primaryCareerSection');
    const card = document.getElementById('primaryCareerCard');
    
    const careerData = getCareerData(userData.primaryCareer);
    const totalItems = careerData.skills.length + careerData.projects.length;
    
    const completedInCareer = [
        ...userData.completedSkills.filter(s => s.career === userData.primaryCareer),
        ...userData.completedProjects.filter(p => p.career === userData.primaryCareer)
    ];
    
    const percentage = Math.round((completedInCareer.length / totalItems) * 100);
    
    card.innerHTML = `
        <h3>${userData.primaryCareer}</h3>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${percentage}%"></div>
        </div>
        <p>${percentage}% Complete</p>
        <button class="btn btn-primary" onclick="window.location.href='career-detail.html?career=${encodeURIComponent(userData.primaryCareer)}'">
            Continue Learning
        </button>
    `;
    
    section.style.display = 'block';
}

function displaySavedCareers(savedCareers) {
    const grid = document.getElementById('savedCareersGrid');
    grid.innerHTML = '';
    
    savedCareers.forEach(career => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.innerHTML = `
            <div class="career-icon">📚</div>
            <h3 class="career-name">${career}</h3>
        `;
        card.onclick = () => {
            window.location.href = `career-detail.html?career=${encodeURIComponent(career)}`;
        };
        grid.appendChild(card);
    });
}

function displayEncouragement(userData) {
    if (!userData.primaryCareer) return;
    
    const careerData = getCareerData(userData.primaryCareer);
    const totalItems = careerData.skills.length + careerData.projects.length;
    
    const completedInCareer = [
        ...userData.completedSkills.filter(s => s.career === userData.primaryCareer),
        ...userData.completedProjects.filter(p => p.career === userData.primaryCareer)
    ];
    
    const percentage = Math.round((completedInCareer.length / totalItems) * 100);
    
    let message = '';
    let icon = '🎯';
    let title = 'Keep Going!';
    
    if (percentage >= 100) {
        message = 'You are industry ready!';
        icon = '🎉';
        title = 'Congratulations!';
    } else if (percentage >= 75) {
        message = 'Almost job-ready. Don\'t stop now!';
        icon = '🚀';
        title = 'Almost There!';
    } else if (percentage >= 50) {
        message = 'Halfway there. Stay consistent!';
        icon = '⭐';
        title = 'Great Progress!';
    } else if (percentage >= 25) {
        message = 'You\'ve started your journey. Keep going!';
        icon = '💪';
        title = 'Nice Start!';
    } else if (percentage > 0) {
        message = 'Every step counts. Keep pushing forward!';
        icon = '🌱';
        title = 'You\'re on Your Way!';
    }
    
    if (message) {
        document.getElementById('encouragementIcon').textContent = icon;
        document.getElementById('encouragementTitle').textContent = title;
        document.getElementById('encouragementMessage').textContent = message;
        document.getElementById('encouragementSection').style.display = 'block';
    }
}

loadDashboard();
