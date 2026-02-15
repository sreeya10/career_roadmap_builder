const API_URL = 'http://localhost:3000/api';
let sessionStartTime = Date.now();
let timeTrackingInterval;

function getToken() {
    return localStorage.getItem('token');
}

function isLoggedIn() {
    return !!getToken();
}

function updateAuthButton() {
    const authButton = document.getElementById('authButton');
    if (!authButton) return;
    
    if (isLoggedIn()) {
        authButton.innerHTML = '<a href="#" onclick="logout()">Logout</a>';
    } else {
        authButton.innerHTML = '<a href="login.html">Login</a>';
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    window.location.href = 'index.html';
}

async function apiRequest(endpoint, options = {}) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Request failed');
        }
        
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

function startTimeTracking() {
    if (!isLoggedIn()) return;
    
    sessionStartTime = Date.now();
    
    if (timeTrackingInterval) {
        clearInterval(timeTrackingInterval);
    }
    
    timeTrackingInterval = setInterval(async () => {
        const timeSpent = Math.floor((Date.now() - sessionStartTime) / 1000);
        if (timeSpent >= 60) {
            try {
                await apiRequest('/time/log', {
                    method: 'POST',
                    body: JSON.stringify({ timeSpent })
                });
                sessionStartTime = Date.now();
            } catch (error) {
                console.error('Time tracking error:', error);
            }
        }
    }, 60000);
}

async function updateStreak() {
    if (!isLoggedIn()) return;
    
    try {
        await apiRequest('/progress/update-streak', {
            method: 'POST'
        });
    } catch (error) {
        console.error('Streak update error:', error);
    }
}

function formatTime(seconds) {
    if (seconds < 60) {
        return `${seconds}s`;
    } else if (seconds < 3600) {
        return `${Math.floor(seconds / 60)}m`;
    } else {
        return `${(seconds / 3600).toFixed(1)}h`;
    }
}

if (isLoggedIn()) {
    updateStreak();
    startTimeTracking();
}

updateAuthButton();

window.addEventListener('beforeunload', async () => {
    if (isLoggedIn() && sessionStartTime) {
        const timeSpent = Math.floor((Date.now() - sessionStartTime) / 1000);
        if (timeSpent > 0) {
            navigator.sendBeacon(`${API_URL}/time/log`, JSON.stringify({ timeSpent }));
        }
    }
});
