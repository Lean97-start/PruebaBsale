import { modelCardProduct } from "../Cards/Card.js";
import {getAllCategories, getAllProducts} from "../Request/request.js";


//Función para obtener los productos
async function getProducts(){
}

//Función para obtener las categorias
async function getCategories(){
}

//Función que inicializa toda la app
async function init(){
    let allCategories = await getAllCategories();
    let products = await getAllProducts();
    if(allCategories.length){
        allCategories.forEach(category => {
            $(
                `<a id=${category.id} class="categoryLink">${category.name.toUpperCase()}</a>`
                ).appendTo(".list-group");
            });
        }
    if(products.length){
        products.forEach(product => {
            let nameCategory = allCategories.filter((category) => {if(category.id === product.category){return category.name}})
            $(modelCardProduct(product, nameCategory[0].name.toUpperCase())).appendTo("#containerProducts");
        });
    }
}

document.addEventListener('DOMContentLoaded', init(), false); //Para realizar la inicializacion.
