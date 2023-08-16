window.onload = function(){

    const burgerbutton = document.querySelector('.hamburger');
    const burgernav = document.querySelector('.burgernav')

    burgerbutton.addEventListener('click', function(){
        burgerbutton.classList.toggle('on');
        burgernav.classList.toggle('on');
    });
    
    const regbutton = document.querySelector('.register-button');

    regbutton.addEventListener('click', function(){

        const fullname = document.querySelector('.fullname').value;

        if(fullname.length < 3){
            alert('Fullname must be at least 3 characters long');
            return;
        }

        const email = document.querySelector('.email').value;
        if(!email.endsWith("@gmail.com")){
            alert('You need to enter valid gmail address!!');
            return;
        }

        const password = document.querySelector('.password').value;
        if(password.length < 8){
            alert('Password must be at least 8 characters long');
            return;
        }

        let passchar = false, passnum = false, passsym = false;
        for(let i = 0; i < password.length; i++){
            if(password[i] >= 'a' && password[i] <= 'z' 
            || password[i] >= 'A' && password[i] <= 'Z'){
                passchar = true;
            }

            if(password[i] >= '0' && password[i] <= '9'){
                passnum = true;
            }

            if(password[i] >= '!' && password[i] <= '/'
            || password[i] >= ':' && password[i] <= '@'
            || password[i] >= '[' && password[i] <= '`'
            || password[i] >= '{' && password[i] <= '~'){
                passsym = true;
            }
            
            if(passchar && passnum && passsym){
                break;
            }
        }

        if(!passchar || !passnum || !passsym){
            alert('Password must contain 1 letter, 1 number, and 1 special characters');
            return;
        }

        const dob = document.querySelector('.dob').value;
        if(!isNaN(dob)){
            alert('You must choose your birth date!');
            return;
        }

        const country = document.querySelector('.country-select').value;
        if(country == 1){
            alert('You must select your country!');
            return;
        }

        const male = document.querySelector('.male');
        const female = document.querySelector('.female');
        if(!male.checked && !female.checked){
            alert('You must choose your gender!');
            return;
        }

        const tos = document.querySelector('.tos');
        if(!tos.checked){
            alert("You must agree to the terms and conditions");
            return;
        }

        const popup = document.querySelector('.popup');

        popup.style.display = 'block';
        
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 10000);

        window.addEventListener('click', function(event) {
            if (event.target !== regbutton && !popup.contains(event.target)){
              popup.style.display = 'none';
              window.location.href = 'home.html';
            }
        });
    })

    // Gender RadioButton
    const male = document.querySelector('.male');
    const female = document.querySelector('.female');
  
    male.addEventListener('change', function(){
    if (male.checked){
        female.checked = false;
    }
    });
  
    female.addEventListener('change', function(){
    if (female.checked){
        male.checked = false;
    }
    });

    const registerloginbutton = document.querySelector('.register-login-button');
    registerloginbutton.addEventListener('click', function(){
        window.location.href = 'login.html';
    });
}