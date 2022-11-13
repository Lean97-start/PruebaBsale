import { modelCardProduct } from "../Cards/Card.js";
import {getAllCategories, getAllProducts} from "../Request/request.js";

//Función que inicializa toda la app
async function init(){
    try {
        let allCategories = await getAllCategories();
        let products = await getAllProducts();
        if(allCategories.length){
            document.getElementById("containerProducts").style.display = "grid";
            document.getElementById('divProductNotFound').style.display = "none";
            document.getElementById('divWithoutProduct').style.display = "none";
            document.getElementById('loadingGIF').style.display = "none";
            allCategories.forEach(category => {
                $(`<a id=${category.id} name=${category.name.toUpperCase()} class="categoryLink">${category.name.toUpperCase()}</a>`).appendTo(".list-group")});
            if(products.length){
                products.forEach(product => {
                    $(modelCardProduct(product)).appendTo("#containerProducts");
                });
            }
        } 
    } catch (error) {
        setTimeout(() => {
            document.getElementById('loadingGIF').style.display = "none";
            document.getElementById("containerProducts").style.display = "none";
            document.getElementById('divProductNotFound').style.display = "none";
            document.getElementById('divWithoutProduct').style.display = "block";
            init();
          }, "2000")    
        // document.getElementById("containerProducts").style.display = "none";
        // document.getElementById('divProductNotFound').style.display = "none";
        // document.getElementById('divWithoutProduct').style.display = "none";
        // document.getElementById('loadingGIF').style.display = "block";
    }
    
}

document.addEventListener('load', init(), false); //Para realizar la inicializacion.
