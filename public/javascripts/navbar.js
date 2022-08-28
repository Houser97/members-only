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