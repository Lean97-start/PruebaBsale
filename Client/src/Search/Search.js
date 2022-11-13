import { getProductsSearch } from "../Request/request.js";
import { modelCardProduct } from "../Cards/Card.js";

let valueInputSearch = document.getElementById("contentInputSearch");
let productsSearched = [];

// Función para desaprecer mensajes de error renderizados y mostrar el catálogo de productos.
function displayGrid(){
  document.getElementById("containerProducts").style.display = "grid";
  document.getElementById('divProductNotFound').style.display = "none";
  document.getElementById('divWithoutProduct').style.display = "none";     
  $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards.
}

// Función para mostrar mensajes de error, vaciar el contenedor y ocultar el catálogo de productos.
function displayMessageError(){
  $("#containerProducts").empty();
  $("#contentInputSearch").val("");
  document.getElementById("containerProducts").style.display = "none";
  document.getElementById("titleResult").style.display = "none";
  document.getElementById('divWithoutProduct').style.display = "none";
  document.getElementById('divProductNotFound').style.display = "block";
}


//Para buscar por un nombre de producto.
$("#clickButtonSearch").on("click", async function (event) {
  event.preventDefault(); //Detengo el evento por defecto.
  $(".categoryLink").removeClass('selected');
  if (valueInputSearch.value.trim() === "") { 
    //Valido si lo que llega por input es distinto de vacío. Con trim() le quito los espacios que deje el usuario.
    $('body, html').animate({scrollTop: '0px'}, 300); //Me lleva al principio de la página.
    document.getElementById("titleResult").style.display = "block";
    document.getElementById("titleResult").style.display = "block";
    $("#contentInputSearch").val("");
    $("#titleResult").text(`No introdujo ningun valor`);

  } else {
    productsSearched = await getProductsSearch(valueInputSearch.value);
    try {
      // Valido si hubo un error en la búsqueda de los productos que coinciden con el parámetro pasado. 
      if(productsSearched.hasOwnProperty("error_message")){displayMessageError()}
      if (productsSearched.length) {
        displayGrid();
        document.getElementById("titleResult").style.display = "block"; //Título de búsqueda.
        $("#titleResult").text(`Resultados para: ${valueInputSearch.value}`);
        $("#contentInputSearch").val("");
        productsSearched.forEach((product) => {
          $(modelCardProduct(product)).appendTo("#containerProducts");
        });
        $('body, html').animate({scrollTop: '0px'}, 300); //Me lleva al principio de la página.
      }  
      
    } catch (error) {
      displayMessageError(); 
    }
  }
});
