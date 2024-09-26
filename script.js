const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Salah Ber';
    } else if (username === 'admin' && password === '123') {
        window.location.href = 'WarHistory.html';
    } else { 
        errorMessage.textContent = 'Invalid username or password';
    }
});