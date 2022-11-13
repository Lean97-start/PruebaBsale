
// let HOST =" https://eccomercebsale.herokuapp.com" || "http://localhost:4105";
let HOST =" https://eccomercebsale.herokuapp.com" ;

export async function getProductsSearch(valueSearch) {
  return await fetch(`${HOST}/v1/search`, {
    method: "POST",
    body: `nameProduct=${valueSearch}`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => console.log(rej));
}

export async function getProductsByCategory(category) {
  return await fetch(`${HOST}/v1/filterProduct`, {
    method: "POST",
    body: `idCategory=${category}`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => console.log(rej));
}

export async function   getAllProducts() {
  return await fetch(`${HOST}/v1/products`, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => console.log(rej));
}

export async function getAllCategories() {
  return await fetch(`${HOST}/v1/category`, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => console.log(rej));
}



