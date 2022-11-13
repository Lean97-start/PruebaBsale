import { getProductsSearch } from "../Request/request.js";
import { modelCardProduct } from "../Cards/Card.js";

let valueInputSearch = document.getElementById("contentInputSearch");
let productsSearched = [];

//Para buscar por un nombre de producto
$("#clickButtonSearch").on("click", async function (event) {
  event.preventDefault();
  $(".categoryLink").removeClass('selected')
  if (valueInputSearch.value === "") {
    $('body, html').animate({scrollTop: '0px'}, 300);
    throw("Null Input");
  } else {
    productsSearched = await getProductsSearch(valueInputSearch.value);
    if (productsSearched.length) {
      document.getElementById("containerProducts").style.display = "grid";
      document.getElementById('divProductNotFound').style.display = "none";
      document.getElementById('divWithoutProduct').style.display = "none";     
      $("#containerProducts").empty(); //Vacío el contenedor para cargar las nuevas cards
      document.getElementById("titleResult").style.display = "block";
      $("#titleResult").text(`Resultados para: ${valueInputSearch.value}`);
      $("#contentInputSearch").val("");
      productsSearched.forEach((product) => {
        $(modelCardProduct(product)).appendTo("#containerProducts");
      });
      $('body, html').animate({scrollTop: '0px'}, 300);
    } else {
      $("#containerProducts").empty();
      $("#contentInputSearch").val("");
      document.getElementById("containerProducts").style.display = "none";
      document.getElementById("titleResult").style.display = "none";
      document.getElementById('divWithoutProduct').style.display = "none";
      document.getElementById('divProductNotFound').style.display = "block";
    }
  }
});

let allCategories = document.getElementById("itemCategories");
