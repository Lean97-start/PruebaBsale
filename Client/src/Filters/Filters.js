import { getProductsByCategory } from "../Request/request.js";
import { modelCardProduct } from "../Index/index.js";

let productsFiltered = [];

//Para filtrar por categoria.
$(".list-group").on("click", async (e) => {
  e.preventDefault();
  if (e.target.id === "") {
    console.log("Null filter");
  } else {
    productsFiltered = await getProductsByCategory(e.target.id);
    if (productsFiltered.length) {
      $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
      productsFiltered.forEach((product) => {
        $(modelCardProduct(product)).appendTo("#containerProducts");
      });
    }
  }
});
