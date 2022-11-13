export function modelCardProduct(product) {
  return `
          <div class="cardTemplate">
            <div id="divIMG">
              <img src=${(product.url_image && product.url_image !== "" )? product.url_image : "https://oñativia.com.ar/carrito/img/producto-sin-foto.jpg"} class="cardImg" alt=${product.name}>
            </div>        
            <div class="cardBodyTemplate">
                <span class="cardTitleName">${product.name.toUpperCase()}</span>
                <span class="cardTitlePrice">$${product.price}</span>
                <span class="cardTitleCategory">${product.nameCategory.toUpperCase()}</span>
              </div>
              <div id="divButton">
                <button id="buttonCardCompra" type="button" class="">Comprar</button>
              </div>
          </div>`
}