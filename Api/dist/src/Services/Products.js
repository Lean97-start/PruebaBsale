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
exports.product = exports.AllProducts = void 0;
const Products_1 = require("../Query/Products");
const FormatProduct_1 = require("./FormatProduct");
const Category_1 = require("./Category");
function AllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        let productsSearched;
        let products = yield (0, Products_1.productsDB)();
        let responseCategories = yield (0, Category_1.categories)();
        productsSearched = (0, FormatProduct_1.productWithCategory)(products, responseCategories, false);
        return productsSearched.length ? productsSearched : { Error_message: "NOT_FOUND_PRODUCT" };
    });
}
exports.AllProducts = AllProducts;
function product(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let productSearched;
        let product = yield (0, Products_1.productDB)(id);
        let responseCategories = yield (0, Category_1.categories)();
        productSearched = (0, FormatProduct_1.productWithCategory)(product, responseCategories, false);
        return productSearched.length ? productSearched : { Error_message: "NOT_FOUND_PRODUCT" };
    });
}
exports.product = product;
