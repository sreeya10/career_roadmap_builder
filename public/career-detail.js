const urlParams = new URLSearchParams(window.location.search);
const careerName = urlParams.get('career');
let careerData;
let completedSkills = [];
let completedProjects = [];

async function loadCareerDetails() {
    if (!careerName) {
        window.location.href = 'careers.html';
        return;
    }
    
    document.getElementById('careerTitle').textContent = careerName;
    careerData = getCareerData(careerName);
    
    if (isLoggedIn()) {
        await loadProgress();
        await checkIfSaved();
        document.getElementById('progressOverview').style.display = 'block';
    }
    
    renderSkills();
    renderProjects();
    renderTools();
    renderRoadmap();
    renderCareerPath();
    updateProgress();
}

async function loadProgress() {
    try {
        const data = await apiRequest(`/progress/${encodeURIComponent(careerName)}`);
        completedSkills = data.skills.map(s => s.skill);
        completedProjects = data.projects.map(p => p.project);
    } catch (error) {
        console.error('Error loading progress:', error);
    }
}

async function checkIfSaved() {
    try {
        const data = await apiRequest('/career/saved');
        const saveBtn = document.getElementById('saveCareerBtn');
        
        if (data.savedCareers.includes(careerName)) {
            saveBtn.textContent = 'Saved';
            saveBtn.disabled = true;
        }
        
        saveBtn.onclick = async () => {
            if (data.primaryCareer && data.primaryCareer !== careerName) {
                alert('You can only track progress for one career at a time. Please select your primary goal.');
                return;
            }
            await saveCareer();
        };
    } catch (error) {
        const saveBtn = document.getElementById('saveCareerBtn');
        saveBtn.onclick = () => {
            alert('Please login to save careers');
            window.location.href = 'login.html';
        };
    }
}

async function saveCareer() {
    try {
        await apiRequest('/career/save', {
            method: 'POST',
            body: JSON.stringify({ career: careerName })
        });
        
        await apiRequest('/career/set-primary', {
            method: 'POST',
            body: JSON.stringify({ career: careerName })
        });
        
        const saveBtn = document.getElementById('saveCareerBtn');
        saveBtn.textContent = 'Saved';
        saveBtn.disabled = true;
    } catch (error) {
        alert('Error saving career: ' + error.message);
    }
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = '';
    
    careerData.skills.forEach((skill, index) => {
        const isCompleted = completedSkills.includes(skill.name);
        const item = document.createElement('div');
        item.className = 'roadmap-item';
        item.innerHTML = `
            <h4>${skill.name}</h4>
            <p>${skill.description}</p>
            <button class="mark-done-btn" onclick="markSkillDone('${skill.name}', this)" ${isCompleted ? 'disabled' : ''}>
                ${isCompleted ? 'Marked Done' : 'Mark as Done'}
            </button>
        `;
        grid.appendChild(item);
    });
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    careerData.projects.forEach((project, index) => {
        const isCompleted = completedProjects.includes(project.name);
        const item = document.createElement('div');
        item.className = 'roadmap-item';
        item.innerHTML = `
            <h4>${project.name}</h4>
            <p>${project.description}</p>
            <button class="mark-done-btn" onclick="markProjectDone('${project.name}', this)" ${isCompleted ? 'disabled' : ''}>
                ${isCompleted ? 'Marked Done' : 'Mark as Done'}
            </button>
        `;
        grid.appendChild(item);
    });
}

function renderTools() {
    const list = document.getElementById('toolsList');
    list.innerHTML = '';
    
    careerData.tools.forEach(tool => {
        const tag = document.createElement('div');
        tag.className = 'tool-tag';
        tag.textContent = tool;
        list.appendChild(tag);
    });
}

function renderRoadmap() {
    const container = document.getElementById('learningPath');
    container.innerHTML = '';
    
    careerData.roadmap.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'learning-step';
        stepDiv.innerHTML = `
            <h4>Step ${index + 1}: ${step.step}</h4>
            <p>${step.description}</p>
        `;
        container.appendChild(stepDiv);
    });
}

function renderCareerPath() {
    const container = document.getElementById('careerPath');
    container.innerHTML = '';
    
    careerData.careerPath.forEach(stage => {
        const stageDiv = document.createElement('div');
        stageDiv.className = 'career-stage';
        stageDiv.innerHTML = `
            <h4>${stage.stage}</h4>
            <p>${stage.description}</p>
        `;
        container.appendChild(stageDiv);
    });
}

async function markSkillDone(skillName, button) {
    if (!isLoggedIn()) {
        alert('Please login to track progress');
        window.location.href = 'login.html';
        return;
    }
    
    try {
        await apiRequest('/progress/skill', {
            method: 'POST',
            body: JSON.stringify({ career: careerName, skill: skillName })
        });
        
        button.textContent = 'Marked Done';
        button.disabled = true;
        completedSkills.push(skillName);
        updateProgress();
    } catch (error) {
        alert('Error marking skill complete: ' + error.message);
    }
}

async function markProjectDone(projectName, button) {
    if (!isLoggedIn()) {
        alert('Please login to track progress');
        window.location.href = 'login.html';
        return;
    }
    
    try {
        await apiRequest('/progress/project', {
            method: 'POST',
            body: JSON.stringify({ career: careerName, project: projectName })
        });
        
        button.textContent = 'Marked Done';
        button.disabled = true;
        completedProjects.push(projectName);
        updateProgress();
    } catch (error) {
        alert('Error marking project complete: ' + error.message);
    }
}

function updateProgress() {
    const totalItems = careerData.skills.length + careerData.projects.length;
    const completedItems = completedSkills.length + completedProjects.length;
    const percentage = Math.round((completedItems / totalItems) * 100);
    
    const progressBar = document.getElementById('overallProgress');
    const progressText = document.getElementById('progressText');
    
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Complete`;
}

loadCareerDetails();
