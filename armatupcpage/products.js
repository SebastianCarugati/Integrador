const baseURL = 'https://back-sandbox.herokuapp.com/api/products?limit=5&offset=6'
let btnProducts = document.querySelector ('#btnProducts');
let token = localStorage.getItem('tokeen')
let content = document.querySelector ('.content')



const getProducts = async () => {
    
   
    try{
        const response = await fetch(baseURL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });

        const json = await response.json();
        const data = json.data.data
        
        .map (user => {
            return (`<p><strong>Producto:</strong> ${user.name}<br></br><strong>Precio:</strong> $${user.price}</p>`)
        }).join ("-------------------------------");

  
        btnProducts.addEventListener('click', () => {
            content.innerHTML = data;
        })



    } catch( error ) {
        alert( 'error el obtener ' + error );
    }


}

getProducts()


