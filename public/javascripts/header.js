const signUpButton = document.querySelector('.sign-up-button');
const signUpForm = document.querySelector('.sign-up');
const svgClose = document.querySelector('.close-sign-up');

signUpButton.addEventListener('click', ()=>{
    signUpForm.style.opacity = '1';
    signUpForm.style.transform = 'translate(50%, -50%) scale(1)';
});

svgClose.addEventListener('click', () => {
    signUpForm.style.opacity = '0';
    signUpForm.style.transform = 'translate(50%, -200%) scale(0.1)';
});