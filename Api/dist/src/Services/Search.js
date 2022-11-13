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
const FormatProduct_1 = require("./FormatProduct");
// Función encargada de traer productos que coincidan con el nombre pasado por parámetro.
function searchProducts(nameProduct) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseCategories = yield (0, Category_1.categories)();
            let productsSearched;
            if (!nameProduct) { //Si no se paso un nameProduct por parámetro, se retornan todos los productos.
                let products = yield (0, Products_1.productsDB)();
                // Llama a la función para aplicar formato a los productos a retornar.
                productsSearched = (0, FormatProduct_1.productWithCategory)(products, responseCategories, false);
            }
            else {
                let products = yield (0, Products_1.productsDB)();
                // Llama a la función para aplicar formato a los productos a retornar.
                productsSearched = (0, FormatProduct_1.productWithCategory)(products, responseCategories, false, nameProduct);
            }
            return productsSearched.length //Valida si el retorno contiene productos, o si contiene un error.
                ? productsSearched
                : { error_message: "NOT_FOUND_PRODUCT" };
        }
        catch (error) {
            throw error;
        }
    });
}
exports.searchProducts = searchProducts;
