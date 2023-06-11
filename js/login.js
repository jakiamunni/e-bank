//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('submit button clicked');
    //step-2: get the email address inside the email input field
    //always remember to use . valueto get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

    const passField = document.getElementById('user-pass');
    const passWord = passField.value;
    console.log(email, passWord);

    if(email === 'munni@gmail.com' && passWord === 'munni'){
        console.log('valid user');
        window.location.href ='bank.html';
    }
    else{
        alert('invalid user');
    }
})
