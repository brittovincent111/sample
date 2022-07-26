var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var passwordError = document.getElementById('password-error')
var submitError = document.getElementById('btnError')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length <= 3){
        nameError.innerHTML = 'Name required';
        return false;
    }
    if(!name.match(/^[a-zA-Z ]+$/)){
        nameError.innerHTML = 'Name cannot contain numbers';
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}

function validateEmail(){
    var email =  document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML = 'Email required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;


    if(password == ""){
        passwordError.innerHTML ="Fill the password please!"
        return false;
    }
    if(password.length < 8){
        passwordError.innerHTML =  "Password length must be atleast 8 characters";
        return false;
    }
    if(!password.match(  /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,15}$/)){
        passwordError.innerHTML='password should contain at least one numeric digit, one uppercase and one lowercase letter';
        return false;
    }
   
    if(password.length > 15){
        passwordError.innerHTML = "Password length must not exceed 15 characters";
        return false;
    }
    
    passwordError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>'
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}