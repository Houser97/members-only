const signUpButton = document.querySelector('.sign-up-button');
const signUpForm = document.querySelector('.sign-up');

signUpButton.addEventListener('click', ()=>{
    signUpForm.style.display = 'flex';
    signUpForm.style.transform = 'translate(50%, -50%)';
    signUpButton.style.transform = 'scale(1)';
})