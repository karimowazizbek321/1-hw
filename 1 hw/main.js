function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');
    
    if (isValidEmail(emailInput)) {
        resultDiv.textContent = 'правильно';
        resultDiv.className = 'result valid';
    } else {
        resultDiv.textContent = 'не правильно';
        resultDiv.className = 'result invalid';
    }
}
