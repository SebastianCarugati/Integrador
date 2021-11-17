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
        location.href='http://127.0.0.1:5500/armatupcpage/products.html';
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
        localStorage.setItem("tokeen", token.token);
        console.log(token)

        if(token){
            redireccionar()
        }
    
        else {
            alert ("Usuario/contraseña invalido")
        }

    } 
    
    catch( error ) {
        alert(error);
    }
}

boton.addEventListener('click', login)

