const signUpButton = document.querySelector('.sign-up-button');
const signUpForm = document.querySelector('.sign-up');
const svgClose = document.querySelector('.close-sign-up');

const logInButton = document.querySelector('.log-in-button');
const logInForm = document.querySelector('.log-in');
const svgCloseLogIn = document.querySelector('.close-log-in');

const secretCodeButton = document.querySelector('.secret-button');
const secretForm = document.querySelector('.secret-code');
const svgCloseSecret = document.querySelector('.close-secret');


const backgroundDiv = document.querySelector('.window-protection');

const openFormValue = document.querySelector('.valueToOpenForm');

// Abrir formulario si hubo errores en la validación al seleccionar el DIV que
// contiene el valor para saber si abrir o no el formulario de nuevo.
if(openFormValue.textContent === 'true'){
    signUpForm.style.opacity = '1';
    signUpForm.style.transform = 'translate(50%, -35%) scale(1)';
    backgroundDiv.style.display = 'flex';
}

//Se envuenve en IF para evitar que haya errores cuando se usa NAVBAR y se oculten estos.
if(signUpButton){
    signUpButton.addEventListener('click', ()=>{
        signUpForm.style.opacity = '1';
        if(openFormValue.textContent === 'true'){
            signUpForm.style.transform = 'translate(50%, -35%) scale(1)';
        } else {
            signUpForm.style.transform = 'translate(50%, -50%) scale(1)';
        }
        backgroundDiv.style.display = 'flex';   
    });

    logInButton.addEventListener('click', ()=>{
        logInForm.style.opacity = '1';
        logInForm.style.transform = 'translate(50%, -50%) scale(1)';
        logInForm.style.top = 'translate(50%, -50%) scale(1)';
        backgroundDiv.style.display = 'flex';
    });
}

if(secretCodeButton){
    secretCodeButton.addEventListener('click', () => {
        secretForm.style.opacity = '1';
        secretForm.style.transform = 'translate(50%, -50%) scale(1)';
        backgroundDiv.style.display = 'flex';
    })
}


svgClose.addEventListener('click', () => {
    signUpForm.style.opacity = '0';
    signUpForm.style.transform = 'translate(50%, -200%) scale(0.1)';
    backgroundDiv.style.display = 'none';
});

svgCloseLogIn.addEventListener('click', () => {
    logInForm.style.opacity = '0';
    logInForm.style.transform = 'translate(50%, -200%) scale(0.1)';
    backgroundDiv.style.display = 'none';
});

if(svgCloseSecret){
    svgCloseSecret.addEventListener('click', () => {
        secretForm.style.opacity = '0';
        secretForm.style.transform = 'translate(50%, -200%) scale(0.1)';
        backgroundDiv.style.display = 'none';
    })
}
