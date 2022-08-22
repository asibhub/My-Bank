// start whit log in button 
document.getElementById('log-in').addEventListener('click', function(){
    const mail=document.getElementById('email');
    const logMail=mail.value;
    
    const pass=document.getElementById('password');
    const password=pass.value;

    if(logMail=="abc@bank.com" && password=="12345"){
        window.location.href='bank.html'
    }
    else{
        console.log("Inncorrecet Password")
    }
});