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
        $('.categoryLink').removeClass('selected');
        $(`#${e.target.id}`).addClass('selected');
        $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
        document.getElementById("titleResult").style.display = "none";
        productsFiltered.forEach((product) => {
          $(modelCardProduct(product)).appendTo("#containerProducts");
        });
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      }
    }
    //Me traigo los productos filtrados por categoría.
    productsFiltered = await getProductsByCategory(e.target.id);
    if (productsFiltered.products) {
      $('.categoryLink').removeClass('selected');
      $(`#${e.target.id}`).addClass('selected');
      $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
      document.getElementById("titleResult").style.display = "block";
      $("#titleResult").text(`Resultados para: ${e.target.name}`);
      productsFiltered.products.forEach((product) => {
        $(modelCardProduct(product)).appendTo("#containerProducts");
      });
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    }
  }
);

$('.categoryLink').on('click', function(){
  
});