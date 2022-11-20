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
exports.getProduct = exports.getAllProducts = void 0;
const Products_1 = require("../Services/Products");
// Controller que me permite obtener todos los productos existentes en el sistema.
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let products = yield (0, Products_1.AllProducts)();
    if (products.error_message) {
        return res.status(404).send(products);
    }
    return res.send(products);
});
exports.getAllProducts = getAllProducts;
// Controller que me permite obtener un producto con id que coincida con el id del producto pasado por params.
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params === null)
        res.status(400).json({ error_message: "NOT_ALLOWED_NULL_ID" });
    const { id } = req.params;
    let response = yield (0, Products_1.product)(id);
    if (response.error_message) {
        return res.status(404).send(response);
    }
    // Valida la existencia de un mensaje de idCategory igual a null
    return res.send(response);
});
exports.getProduct = getProduct;
