

export async function getProductsSearch(valueSearch) {
  return await fetch("http://localhost:4105/search", {
    method: "POST",
    body: `nameProduct=${valueSearch}`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => console.log(rej));
}

export async function getAllProducts() {
  return await fetch("http://localhost:4105/products", {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => console.log(rej));
}

export async function getAllCategories() {
  return await fetch("http://localhost:4105/category", {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((response) => response.json())
    .then((data) => data, (rej) => console.log(rej));
}



