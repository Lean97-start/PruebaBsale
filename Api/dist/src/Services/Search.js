"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProducts = void 0;
const Products_1 = require("../Query/Products");
const Category_1 = require("./Category");
function productWithCategory(products, responseCategories, nameProduct) {
    let productsSearched = [];
    if (nameProduct) {
        products.forEach((product) => {
            if (product.name.includes(nameProduct.toUpperCase())) {
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
function searchProducts(nameProduct) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseCategories = yield (0, Category_1.categories)();
            let productsSearched;
            if (!nameProduct) {
                let products = yield (0, Products_1.productsDB)();
                productsSearched = productWithCategory(products, responseCategories);
            }
            else {
                let products = yield (0, Products_1.productsDB)();
                productsSearched = productWithCategory(products, responseCategories, nameProduct);
            }
            return productsSearched.length
                ? productsSearched
                : { Error_message: "NOT_FOUND_PRODUCT" };
        }
        catch (error) {
            throw error;
        }
    });
}
exports.searchProducts = searchProducts;
