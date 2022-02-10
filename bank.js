document.getElementById('login-submit').addEventListener('click', function(){
    // get user email. 
     const getEmail = document.getElementById('user-email').value;
    //  get user password.  
     const getPassword = document.getElementById('user-password').value;  

    //  chec email and password
     if(getEmail == 'abirshadow12@gmail.com' || getEmail == 'kayesah29@gmail.com' || getEmail == 'mdshakilx9@gmail.com' && getPassword == 'ilovemyfriends'){
         window.location.href = 'banking.html' 
     }
     else{
        const parent = document.getElementById('checking'); 
        const createingh1 = document.createElement('h1');
        createingh1.innerText = 'Tui ke??? za vag 😡😡😡';
        parent.appendChild(createingh1);
     }
}); 
