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
function AllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        let products = yield (0, Products_1.productsDB)();
        return products ? products : { err: products };
    });
}
exports.AllProducts = AllProducts;
function product(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let product = yield (0, Products_1.productDB)(id);
        return product ? product : { err: product };
    });
}
exports.product = product;
