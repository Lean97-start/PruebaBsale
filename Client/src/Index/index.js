import { modelCardProduct } from "../Cards/Card.js";
import {getAllCategories, getAllProducts} from "../Request/request.js";

//Función que inicializa toda la app
async function init(){
    $("titleResult").hide();
    let allCategories = await getAllCategories();
    let products = await getAllProducts();
    if(allCategories.length){
        allCategories.forEach(category => {
            $(`<a id=${category.id} name=${category.name.toUpperCase()} class="categoryLink">${category.name.toUpperCase()}</a>`).appendTo(".list-group")});
        if(products.length){
            products.forEach(product => {
                $(modelCardProduct(product)).appendTo("#containerProducts");
            });
        }
    }
}
$(window).load(function() {
    $(".loader").fadeOut("slow");
});

document.addEventListener('load', init(), false); //Para realizar la inicializacion.
