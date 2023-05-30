let password1 = document.querySelector('#password'),
    password2 = document.querySelector('#confirm_password'),
    errorDisplay = document.getElementsByClassName('errorDisplay');

password1.addEventListener('keyup', (e) => {
    let message = 'Password must be longer than 8 characters',
        message2 = 'Passwords must match'
        errorDiv = errorDisplay[0],
        errorDiv2 = errorDisplay[1];

    password1.value.length < 8 ? validation(errorDiv, message) : validation(errorDiv, '')
    password1.value !== password2.value && password2.value.length > 1 ? validation(errorDiv2, message2) : validation(errorDiv, '')
});

password2.addEventListener('keyup', (e) => {
    let message = 'Passwords must match'
    let errorDiv = errorDisplay[1]
    password1.value !== password2.value ? validation(errorDiv, message) : validation(errorDiv, '') 
});


function validation(errorDiv, message) {
    errorDiv.textContent = message;
}
