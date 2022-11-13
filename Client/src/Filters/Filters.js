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

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});