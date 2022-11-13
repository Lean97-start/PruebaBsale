import { getAllProducts, getProductsByCategory } from "../Request/request.js";
import { modelCardProduct } from "../Cards/Card.js";

let productsFiltered = [];

//Para filtrar por categoria.
$(".list-group").on("click", async (e) => {
  e.preventDefault();
  if (e.target.id === "") {
    throw ("Null filter");
  } else if(e.target.id === 'allCategories'){
    //Me traigo todos los productos.
      productsFiltered = await getAllProducts();
      if (productsFiltered.length) {
        $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
        productsFiltered.forEach((product) => {
          $(modelCardProduct(product)).appendTo("#containerProducts");
        });
      }
    }
    //Me traigo los productos filtrados por categoría.
    productsFiltered = await getProductsByCategory(e.target.id);
    if (productsFiltered.products) {
      $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
      productsFiltered.products.forEach((product) => {
        $(modelCardProduct(product)).appendTo("#containerProducts");
      });
    }
  }
);
