import {getAllCategories, getAllProducts} from "../Request/request.js";

export function modelCardProduct(product){
    return `<div class="card" style="width: 18rem;">
                    <img src=${product.url_image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${product.name}</h4>
                        <h6 class="card-title">${product.category}</h6>
                        <h5 class="card-title">${product.price}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>`
}


//Función para obtener los productos
async function getProducts(){
    let products = await getAllProducts();
    if(products.length){
        products.forEach(product => {
            $(modelCardProduct(product)).appendTo("#containerProducts");
        });
    }
}

//Función para obtener las categorias
async function getCategories(){
    let allCategories = await getAllCategories();
    if(allCategories.length){
    allCategories.forEach(category => {
        $(
            `<a href="#" id="itemCategories" class="list-group-item list-group-item-action">${category.name}</a>`
          ).appendTo(".list-group");
    });
}
}

//Función que inicializa toda la app
function init(){
    getProducts();
    getCategories();
}

document.addEventListener('DOMContentLoaded', init(), false); //Para realizar la inicializacion.




{/* <span id="titleCardProduct"></span>
                    <img id="imageCardProduct" src= alt="image" srcset="">
                    <span id="titleCardCategory"></span>
                    <span id="titleCardPrice">${product.price}</span> */}