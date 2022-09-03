const secreCodeForm1 = document.querySelector('.secret-code');

secreCodeForm1.addEventListener('submit', (e) => {
    const secretCodeValue = document.querySelector('#secret-code');
    if(secretCodeValue.value !== 'Houser'){
        secretCodeValue.style.border = 'red 2px solid';
        e.preventDefault();
        return;
    }
});