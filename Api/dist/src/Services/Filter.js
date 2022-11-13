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
exports.filterByCategory = void 0;
const Category_1 = require("../Query/Category");
const Products_1 = require("../Query/Products");
const FormatProduct_1 = require("./FormatProduct");
// Función encargada de traer los productos relacionados a una categoria.
function filterByCategory(idCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let productsCategory = [];
            let products = yield (0, Products_1.productsDB)();
            let category = yield (0, Category_1.categoriesDB)();
            if (!idCategory) {
                return { error_messageNull: "ID_CATEGORY_NULL" };
            }
            else {
                productsCategory = (0, FormatProduct_1.productWithCategory)(products, category, idCategory);
                return productsCategory.length ? { products: productsCategory } : { error_message: "NOT_FOUND_PRODUCTS_CATEGORY" };
            }
        }
        catch (error) {
            // Si hay un problema con la petición a la base de datos, se genera un error.
            throw error;
        }
    });
}
exports.filterByCategory = filterByCategory;
