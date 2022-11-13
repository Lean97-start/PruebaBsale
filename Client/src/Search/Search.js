import { getProductsSearch } from "../Request/request.js";
import { modelCardProduct } from "../Cards/Card.js";

let valueInputSearch = document.getElementById("contentInputSearch");
let productsSearched = [];

function displayGrid(){
  document.getElementById("containerProducts").style.display = "grid";
  document.getElementById('divProductNotFound').style.display = "none";
  document.getElementById('divWithoutProduct').style.display = "none";     
  $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
}

function displayMessageError(){
  $("#containerProducts").empty();
  $("#contentInputSearch").val("");
  document.getElementById("containerProducts").style.display = "none";
  document.getElementById("titleResult").style.display = "none";
  document.getElementById('divWithoutProduct').style.display = "none";
  document.getElementById('divProductNotFound').style.display = "block";
}


//Para buscar por un nombre de producto
$("#clickButtonSearch").on("click", async function (event) {
  event.preventDefault();
  $(".categoryLink").removeClass('selected')
  if (valueInputSearch.value.trim() === "") {
    $('body, html').animate({scrollTop: '0px'}, 300);
    document.getElementById("titleResult").style.display = "block";
    document.getElementById("titleResult").style.display = "block";
    $("#contentInputSearch").val("");
    $("#titleResult").text(`No introdujo ningun valor`);
  } else {
    productsSearched = await getProductsSearch(valueInputSearch.value);
    try {
      if(productsSearched.hasOwnProperty("error_message")){displayMessageError()}
      if (productsSearched.length) {
        displayGrid();
        document.getElementById("titleResult").style.display = "block";
        $("#titleResult").text(`Resultados para: ${valueInputSearch.value}`);
        $("#contentInputSearch").val("");
        productsSearched.forEach((product) => {
          $(modelCardProduct(product)).appendTo("#containerProducts");
        });
        $('body, html').animate({scrollTop: '0px'}, 300);
      }  
    } catch (error) {
      displayMessageError(); 
    }
  }
});
