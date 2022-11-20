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
const Search_1 = require("../Query/Search");
// Función encargada de traer productos que coincidan con el nombre pasado por parámetro.
function searchProducts(nameProduct) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!nameProduct) { //Si no se paso un nameProduct por parámetro, se retornan todos los productos.
                let productsSearched = yield (0, Products_1.productsDB)();
                // Llama a la función para aplicar formato a los productos a retornar.
                return productsSearched.length ? productsSearched : { error_message: "NOT_FOUND_PRODUCT" };
                //Valida si el retorno contiene productos, o si contiene un error.
            }
            let productsSearched = yield (0, Search_1.searchByName)(nameProduct.toUpperCase());
            return productsSearched.length ? productsSearched : { error_message: "NOT_FOUND_PRODUCT" };
            //Valida si el retorno contiene productos, o si contiene un error.
        }
        catch (error) {
            throw error;
        }
    });
}
exports.searchProducts = searchProducts;
