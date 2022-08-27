const signUpForm1 = document.querySelector('.sign-up');

signUpForm1.addEventListener('submit', (e) => {
    const pwd = document.querySelector('#pwd');
    const pwdRepeat = document.querySelector('#pwdRepeat');
    if(pwd.value !== pwdRepeat.value){
        pwdRepeat.style.border = 'red 2px solid';
        pwd.style.border = 'red 2px solid';
        e.preventDefault();
        return;
    }
});