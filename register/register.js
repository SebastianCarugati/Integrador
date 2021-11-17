const baseURL = 'https://back-sandbox.herokuapp.com/api';
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('registrar-boton');


const register = async () => {
    const payload = {
        name: nameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        age: Number(ageInput.value),
        password: passwordInput.value,
        
        
    };

    function redireccionar(){
        location.href='http://127.0.0.1:5500/login/login.html';
      } 

    try{
        const response = await fetch(baseURL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const json = await response.json();
        console.log(payload)
        alert("Te registraste con exito!")
        localStorage.setItem("Usuario", JSON.stringify(payload))
        if (json) {
            redireccionar()
        }
    } catch( error ) {
        alert('che error', error);
    }
}

submitButton.addEventListener('click', register);