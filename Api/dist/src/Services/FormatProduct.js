"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productWithCategory = void 0;
// Función encargada de darle formato a los productos, según sea el caso.
function productWithCategory(products, responseCategories, idCategory, nameProduct) {
    let productsSearched = [];
    if (nameProduct) {
        // Aplica formato al producto buscado por nombre.
        products.forEach((product) => {
            if (product.name.toUpperCase().includes(nameProduct.toUpperCase())) {
                responseCategories.forEach((category) => {
                    if (category.id == 0) { //Si es igual a 0, significa que es un error y no se encontraron categorias.
                        return responseCategories;
                    }
                    else if (category.id === product.category) {
                        //Si la categoria es igual a la buscada, agrega el nombre de la categoria a la propiedad "nameCategory" y la agrega al arreglo.
                        product.nameCategory = category.name;
                        productsSearched.push(product);
                    }
                });
            }
        });
    }
    else if (idCategory && nameProduct == undefined) {
        // Aplica formato al producto buscado por categoria.
        products.forEach((product) => {
            if (idCategory === product.category.toString()) {
                responseCategories.forEach((category) => {
                    if (category.id == 0) { //Si es igual a 0, significa que es un error y no se encontraron categorias.
                        return responseCategories;
                    }
                    else if (category.id === product.category) {
                        //Si la categoria es igual a la buscada, agrega el nombre de la categoria a la propiedad "nameCategory" y la agrega al arreglo.
                        product.nameCategory = category.name;
                        productsSearched.push(product);
                    }
                });
            }
        });
    }
    else {
        // Aplica formato a todos los productos asignandole el nombre por producto de la categoria a la que pertenece.
        products.forEach((product) => {
            responseCategories.forEach((category) => {
                if (category.id == 0) { //Si es igual a 0, significa que es un error y no se encontraron categorias.
                    return responseCategories;
                }
                else if (category.id === product.category) {
                    //Si la categoria es igual a la buscada, agrega el nombre de la categoria a la propiedad "nameCategory" y la agrega al arreglo.
                    product.nameCategory = category.name;
                    productsSearched.push(product);
                }
            });
        });
    }
    return productsSearched;
}
exports.productWithCategory = productWithCategory;
