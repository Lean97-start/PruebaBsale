"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productWithCategory = void 0;
function productWithCategory(products, responseCategories, idCategory, nameProduct) {
    let productsSearched = [];
    if (nameProduct) {
        products.forEach((product) => {
            if (product.name.toUpperCase().includes(nameProduct.toUpperCase())) {
                responseCategories.forEach((category) => {
                    if (category.id == 0) {
                        return responseCategories;
                    }
                    else if (category.id === product.category) {
                        product.nameCategory = category.name;
                        productsSearched.push(product);
                    }
                });
            }
        });
    }
    else if (idCategory && nameProduct == undefined) {
        products.forEach((product) => {
            if (idCategory === product.category.toString()) {
                responseCategories.forEach((category) => {
                    if (category.id == 0) {
                        return responseCategories;
                    }
                    else if (category.id === product.category) {
                        product.nameCategory = category.name;
                        productsSearched.push(product);
                    }
                });
            }
        });
    }
    else {
        products.forEach((product) => {
            responseCategories.forEach((category) => {
                if (category.id == 0) {
                    return responseCategories;
                }
                else if (category.id === product.category) {
                    product.nameCategory = category.name;
                    productsSearched.push(product);
                }
            });
        });
    }
    return productsSearched;
}
exports.productWithCategory = productWithCategory;
