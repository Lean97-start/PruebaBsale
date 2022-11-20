let HOST = "https://eccomercebsale.herokuapp.com" ;

// Petición POST para traer los productos que tengan coincidencia con el valor que llega por parámetro.
export async function getProductsSearch(valueSearch) {
  return await fetch(`${HOST}/v1/search`, {
    method: "POST",
    body: `nameProduct=${valueSearch}`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => rej);
}

// Petición POST para traer los productos que tengan coincidencia la categoria seleccionada.
export async function getProductsByCategory(category) {
  return await fetch(`${HOST}/v1/filterProduct`, {
    method: "POST",
    body: `idCategory=${category}`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => rej);
}

// Petición GET para traer todos los productos existentes.
export async function   getAllProducts() {
  return await fetch(`${HOST}/v1/products`, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => rej);
}

// Petición GET para traer todos las categorias existentes.
export async function getAllCategories() {
  return await fetch(`${HOST}/v1/category`, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => rej);
}



