import { getAllProducts, getProductsByCategory } from "../Request/request.js";
import { modelCardProduct } from "../Cards/Card.js";

let productsFiltered = [];


// Función para desaprecer mensajes de error renderizados y mostrar el catálogo de productos.
function displayGrid(){
  document.getElementById("containerProducts").style.display = "grid";
  document.getElementById('divWithoutProduct').style.display = "none";
  document.getElementById('divProductNotFound').style.display = "none";
  $('.categoryLink').removeClass('selected');
  $('#categoryLink').removeClass('selected'); //Me remueve el style class selected cuando el formato es mobile.
  $('.itemLinkCategory').removeClass('selected'); //Me remueve el style class selected cuando el formato es mobile. Este lo uso para el color de la letra de la categoria.
  $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
  $(`#btnMenu`).addClass('collapsed'); //Los uso para ocultar el botón de menú cuando es formato tablet o mobile.
  $(`#btnMenu`).attr("aria-expanded", "false");
  $('#navbarSupportedContent').removeClass('show');
}


// Función para mostrar mensajes de error, vaciar el contenedor y ocultar el catálogo de productos.
function displayMessageError(){
  $("#containerProducts").empty();
  document.getElementById("containerProducts").style.display = "none";
  document.getElementById('divProductNotFound').style.display = "none";
  document.getElementById('divWithoutProduct').style.display = "block";
  $(`#btnMenu`).addClass('collapsed');  //Los uso para ocultar el botón de menú cuando es formato tablet o mobile.
  $(`#btnMenu`).attr("aria-expanded", "false");
  $('#navbarSupportedContent').removeClass('show');
}


//Función que me permite filtrar dependiendo de la resolución por la acción del botón de filtrado.
async function filterCategories(e){
  e.preventDefault();
  if (e.target.id === "") {
    // Si no se le pasa un identificador de categoria, devuelve un error.
    throw ("Null filter");
  } else if(e.target.id === 'allCategories'){
    //Me traigo todos los productos.
      productsFiltered = await getAllProducts();
      if(productsFiltered.hasOwnProperty("error_message")){displayMessageError()}
      if (productsFiltered.length) {
        displayGrid();
        $(`#${e.target.id}`).addClass('selected');
        document.getElementById("titleResult").style.display = "none";
        $('body, html').animate({scrollTop: '0px'}, 300); //Me permite volver al principio de la página.
        productsFiltered.forEach((product) => {
          $(modelCardProduct(product)).appendTo("#containerProducts");
        });
      }
    }else if(e.target.id !== 'allCategories'){
      //Me traigo los productos filtrados por categoría.
      productsFiltered = await getProductsByCategory(e.target.id);
      if(productsFiltered.hasOwnProperty("error_message")){displayMessageError()}
      try {
        if (productsFiltered.products) {
          displayGrid();
          $(`#${e.target.id}`).addClass('selected');
          document.getElementById("titleResult").style.display = "block";
          $("#titleResult").text(`Resultados para: ${e.target.outerText}`);
          $('body, html').animate({scrollTop: '0px'}, 300); //Me permite volver al principio de la página.
          productsFiltered.products.forEach((product) => {
            $(modelCardProduct(product)).appendTo("#containerProducts");
          });
        }  
      } catch (error) {
        $(`#btnMenu`).addClass('collapsed');
        $(`#btnMenu`).attr("aria-expanded", "false");
        $('#navbarSupportedContent').removeClass('show');
        displayMessageError();
      }
    }else{
      displayMessageError()
    }
}


//Para filtrar por categoria cuando la resolucion es mayor a 1200px.
$(".dropdown-menu").on("click", async (e) => {
    filterCategories(e);
  }
);


//Para filtrar por categoria en menú cuando la resolucion es mayor a 1200px.
$(".list-group").on("click", async (e) => {
    filterCategories(e);
  }
);