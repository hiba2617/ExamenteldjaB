document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const errorDiv = document.getElementById('error');
    const successMessage = document.getElementById('successMessage');
    const spinner = document.getElementById('spinner');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        
        errorDiv.classList.add('hidden');
        successMessage.classList.add('hidden');
        spinner.classList.add('hidden');

      
        if (password !== confirmPassword || password.length < 6) {
            errorDiv.classList.remove('hidden'); 
            return;
        }

        spinner.classList.remove('hidden');

      
        setTimeout(() => {
            spinner.classList.add('hidden');
            successMessage.classList.remove('hidden'); 
            registerForm.reset();
        }, 2000); 
    });
});







