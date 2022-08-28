const signUpButton = document.querySelector('.sign-up-button');
const signUpForm = document.querySelector('.sign-up');
const svgClose = document.querySelector('.close-sign-up');

const logInButton = document.querySelector('.log-in-button');
const logInForm = document.querySelector('.log-in');
const svgCloseLogIn = document.querySelector('.close-log-in');

const backgroundDiv = document.querySelector('.window-protection');

const openFormValue = document.querySelector('.valueToOpenForm');

// Abrir formulario si hubo errores en la validación.
if(openFormValue.textContent === 'true'){
    signUpForm.style.opacity = '1';
    signUpForm.style.transform = 'translate(50%, -50%) scale(1)';
    backgroundDiv.style.display = 'flex';
}

signUpButton.addEventListener('click', ()=>{
    signUpForm.style.opacity = '1';
    signUpForm.style.transform = 'translate(50%, -50%) scale(1)';
    backgroundDiv.style.display = 'flex';
});

svgClose.addEventListener('click', () => {
    signUpForm.style.opacity = '0';
    signUpForm.style.transform = 'translate(50%, -200%) scale(0.1)';
    backgroundDiv.style.display = 'none';
});

logInButton.addEventListener('click', ()=>{
    logInForm.style.opacity = '1';
    logInForm.style.transform = 'translate(50%, -50%) scale(1)';
    backgroundDiv.style.display = 'flex';
});

svgCloseLogIn.addEventListener('click', () => {
    logInForm.style.opacity = '0';
    logInForm.style.transform = 'translate(50%, -200%) scale(0.1)';
    backgroundDiv.style.display = 'none';
});