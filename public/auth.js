async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const data = await apiRequest('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.userId);
        
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert(error.message || 'Login failed');
    }
}

async function handleSignup(event) {
    event.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    try {
        const data = await apiRequest('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        });
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.userId);
        
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert(error.message || 'Signup failed');
    }
}
