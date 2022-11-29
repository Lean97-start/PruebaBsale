
// Función para formatear la estructura de una card.
export function modelCardProduct(product) {
  return `
          <div id="${product.id_prod}" class="cardTemplate">
            <div id="divIMG">
              <img src=${(product.url_image && product.url_image !== "" )? product.url_image : "https://oñativia.com.ar/carrito/img/producto-sin-foto.jpg"} class="cardImg" alt=${product.product_name}>
            </div>        
            <div class="cardBodyTemplate">
                <span class="cardTitleName">${product.product_name.toUpperCase()}</span>
                <span class="cardTitlePrice">$${product.price}</span>
                <span class="cardTitleCategory">${product.cat_name.toUpperCase()}</span>
              </div>
              <div id="divButton">
                <button id="buttonCardCompra" type="button" onClick={alert("Funcionalidad_pendiente")} class="buttonAction"> Comprar </button>
              </div>
          </div>`
}