
export function modelCardProduct(product, nameCategory) {
  console.log(product.url_image)
  return `
                <div class="card">
                        <img src=${
                          product.url_image !== ""
                            ? product.url_image
                            : "https://oñativia.com.ar/carrito/img/producto-sin-foto.jpg"
                          } class="card-img-top" alt=${product.name}>
                        <div class="cardBody">
                            <h6 class="card-title">${product.name}</h6>
                            <h6 class="card-title">${nameCategory}</h6>
                            <h5 class="card-title">$${product.price}</h5>
                            <button id="buttonCardModal" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Comprar</button>
                        </div>
                </div>
            `;
}

$("#buttonCardModal").on('click', (e) => {
  e.preventDefault();
  console.log("DS")
});
