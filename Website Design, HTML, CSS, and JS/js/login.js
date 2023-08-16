window.onload = function(){

    const burgerbutton = document.querySelector('.hamburger');
    const burgernav = document.querySelector('.burgernav')

    burgerbutton.addEventListener('click', function(){
        burgerbutton.classList.toggle('on');
        burgernav.classList.toggle('on');
    });
    
    const loginloginbutton = document.querySelector('.login-button');

    loginloginbutton.addEventListener('click', function(){
        const loginemail = document.querySelector('.email').value;
        if(!isNaN(loginemail)){
            alert('You must fill your email!');
            return;
        }

        if(!loginemail.endsWith("@gmail.com")){
            alert('You need to enter valid gmail address!!');
            return;
        }

        const password = document.querySelector('.password').value;
        if(!isNaN(password)){
            alert('You must fill your password!');
            return;
        }
        const loginpopup = document.querySelector('.loginpopup');
    
        loginpopup.style.display = 'block';
    
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 10000);
    
        window.addEventListener('click', function(event) {
            if (event.target !== loginloginbutton && !loginpopup.contains(event.target)){
                loginpopup.style.display = 'none';
                window.location.href = 'home.html';
            }
        });
    });
}