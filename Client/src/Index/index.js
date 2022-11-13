import { modelCardProduct } from "../Cards/Card.js";
import {getAllCategories, getAllProducts} from "../Request/request.js";

// Función para desaprecer mensajes de error renderizados y mostrar el catálogo de productos.
function displayGrid(){
    document.getElementById("containerProducts").style.display = "grid";
    document.getElementById('divProductNotFound').style.display = "none";
    document.getElementById('divWithoutProduct').style.display = "none";
    document.getElementById('loadingGIF').style.display = "none";
}

// Función para mostrar mensajes de error, vaciar el contenedor y ocultar el catálogo de productos.
function displayMessageError(){
    document.getElementById('loadingGIF').style.display = "none";
    document.getElementById("containerProducts").style.display = "none";
    document.getElementById('divProductNotFound').style.display = "none";
    document.getElementById('divWithoutProduct').style.display = "block";
}

//Función que inicializa toda la app
async function init(){
    try {
        let allCategories = await getAllCategories();
        let products = await getAllProducts();
        if(allCategories.length){
            displayGrid();
            allCategories.forEach(category => {
                // Renderizo todas las categorias existente.
                $(`<a id=${category.id} name=${category.name.toUpperCase()} class="categoryLink">${category.name.toUpperCase()}</a>`).appendTo(".list-group")});
            if(products.length){
                products.forEach(product => {
                    // Renderizo los productos existentes.
                    $(modelCardProduct(product)).appendTo("#containerProducts");
                });
            }
        } 
    } catch (error) {
        // Espera dos segundos para restablecer la conexión en caso de fallar y lo vuelve a intentar.
        setTimeout(() => {
            displayMessageError();
            init();
          }, "2000");
    }
    
}

document.addEventListener('load', init(), false); //Para realizar la inicialización al cargar los componentes.
