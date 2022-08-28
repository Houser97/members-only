const svgOpenMenu = document.querySelector('.svg-menu');
const svgCloseMenu = document.querySelector('.svg-close');
const navbar = document.querySelector('.navbar');

const containerSVG = document.getElementById('svg-container');

svgOpenMenu.addEventListener('click', () => {
    svgOpenMenu.style.display = 'none';
    svgCloseMenu.style.display = 'flex';
    navbar.style.transform = 'translateX(-100%)'
})

svgCloseMenu.addEventListener('click', () => {
    svgCloseMenu.style.display = 'none';
    svgOpenMenu.style.display = 'flex';
    navbar.style.transform = 'translateX(100%)'
})

// Abrir formularios
const logInButtonNav = document.querySelector('.log-in-button-nav');
const signUpButtonNav = document.querySelector('.sign-up-button-nav');

const logInFormFromNav = document.querySelector('.log-in');
const signUpFormFromNav = document.querySelector('.sign-up');

signUpButtonNav.addEventListener('click', () => {
    signUpFormFromNav.style.opacity = '1';
    signUpFormFromNav.style.transform = 'translate(50%, -50%) scale(1)';
    backgroundDiv.style.display = 'flex';
})

logInButtonNav.addEventListener('click', ()=>{
    logInFormFromNav.style.opacity = '1';
    logInFormFromNav.style.transform = 'translate(50%, -50%) scale(1)';
    backgroundDiv.style.display = 'flex';
});