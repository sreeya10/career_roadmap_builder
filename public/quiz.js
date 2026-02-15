function submitQuiz() {
    const form = document.getElementById('quizForm');
    
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert('Please answer all questions');
        return;
    }
    
    const q1val = q1.value;
    const q2val = q2.value;
    const q4val = q4.value;
    const q5val = q5.value;
    
    let career = '';
    
    if (q1val === 'webdev') {
        if (q2val === 'coding') {
            career = 'Full Stack Developer';
        } else if (q2val === 'design') {
            career = 'UI/UX Designer';
        } else {
            career = 'Frontend Developer';
        }
    } else if (q1val === 'ai') {
        if (q2val === 'coding') {
            career = 'AI Engineer';
        } else if (q2val === 'analysis') {
            career = 'Data Scientist';
        } else {
            career = 'Machine Learning Engineer';
        }
    } else if (q1val === 'cloud') {
        if (q4val === 'innovation') {
            career = 'Cloud Architect';
        } else {
            career = 'DevOps Engineer';
        }
    } else if (q1val === 'security') {
        if (q2val === 'coding') {
            career = 'Ethical Hacker';
        } else {
            career = 'Cybersecurity Analyst';
        }
    } else if (q1val === 'design') {
        if (q5val === 'artistic') {
            career = 'UI/UX Designer';
        } else {
            career = 'Product Designer';
        }
    } else if (q1val === 'data') {
        if (q2val === 'analysis') {
            career = 'Data Analyst';
        } else {
            career = 'Business Intelligence Analyst';
        }
    } else if (q1val === 'game') {
        if (q2val === 'coding') {
            career = 'Game Developer';
        } else {
            career = 'Unity Developer';
        }
    } else if (q1val === 'emerging') {
        if (q2val === 'coding') {
            career = 'Blockchain Developer';
        } else {
            career = 'AR/VR Developer';
        }
    } else if (q1val === 'systems') {
        if (q5val === 'technical') {
            career = 'Network Engineer';
        } else {
            career = 'Systems Engineer';
        }
    } else {
        career = 'Full Stack Developer';
    }
    
    saveQuizResult(career);
    window.location.href = `career-detail.html?career=${encodeURIComponent(career)}`;
}

async function saveQuizResult(career) {
    if (!isLoggedIn()) return;
    
    try {
        await apiRequest('/career/save', {
            method: 'POST',
            body: JSON.stringify({ career })
        });
        
        await apiRequest('/career/set-primary', {
            method: 'POST',
            body: JSON.stringify({ career })
        });
    } catch (error) {
        console.error('Error saving quiz result:', error);
    }
}
