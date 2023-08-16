window.onload = function(){

    // Burger Navigation
    const burgerbutton = document.querySelector('.hamburger');
    const burgernav = document.querySelector('.burgernav')

    burgerbutton.addEventListener('click', function(){
        burgerbutton.classList.toggle('on');
        burgernav.classList.toggle('on');
    });


    const loginbutton = document.querySelector('.register-login-button');
    loginbutton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });


}