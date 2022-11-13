import { modelCardProduct } from "../Cards/Card.js";
import {getAllCategories, getAllProducts} from "../Request/request.js";

//Función que inicializa toda la app
async function init(){
    $("titleResult").hide();
    let allCategories = await getAllCategories();
    let products = await getAllProducts();
    if(allCategories.length){
        allCategories.forEach(category => {
            $(`<a id=${category.id} class="categoryLink">${category.name.toUpperCase()}</a>`).appendTo(".list-group")});
        }
    if(products.length){
        products.forEach(product => {
            $(modelCardProduct(product)).appendTo("#containerProducts");
        });
    }
}

document.addEventListener('DOMContentLoaded', init(), false); //Para realizar la inicializacion.
