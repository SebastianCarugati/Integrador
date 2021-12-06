const baseURL = 'https://back-sandbox.herokuapp.com/api';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const boton = document.querySelector('#submit');


const login = async () => {


    const body = {
        email: emailInput.value,
        password: passwordInput.value
    };
    console.log(body)
    
    function redireccionar(){
        location.href='https://sebastianintegradorjs.netlify.app//armatupcpage/products.html';
      } 

    try {
        const response = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });


        
        const json = await response.json();
        const token = json 
        let usuario = localStorage.getItem('Usuario');
        let user= JSON.parse (usuario)

       if ( user.email !== body.email &&
        user.password !== body.password) {
        !localStorage.setItem("tokeen", token.token) 
       }

       if ( user.email === body.email &&
        user.password === body.password) {
        localStorage.setItem("tokeen", token.token) 
       }
        
        

       if (
           user.email === body.email &&
           user.password === body.password &&
           localStorage.getItem('tokeen')
           ) {
        redireccionar()

       } else {
           alert ("El usuario o contraseña es invalido o inexistente")

       }
 
           
      
    }

    
    catch( error ) {
        alert(error);
    }
}

boton.addEventListener('click', login)

