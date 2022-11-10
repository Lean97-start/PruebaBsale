import { getProductsSearch } from "../Request/request.js";
import { modelCardProduct } from "../Index/index.js";

let valueInputSearch = document.getElementById("contentInputSearch");
let productsSearched = [];

//Para buscar por un nombre de producto
$("#clickButtonSearch").on("click", async function (event) {
  event.preventDefault();
  if (valueInputSearch.value === "") {
    console.log("Null Input");
  } else {
    productsSearched = await getProductsSearch(valueInputSearch.value);
    console.log(productsSearched);
    if (productsSearched.length) {
      $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
      productsSearched.forEach((product) => {
        $(modelCardProduct(product)).appendTo("#containerProducts");
      });
    }
  }
});

let allCategories = document.getElementById("itemCategories");
