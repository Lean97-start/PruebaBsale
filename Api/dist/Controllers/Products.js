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
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield (0, Products_1.AllProducts)());
});
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params === null)
        res.status(400).json({ err: "BAD_REQUEST" });
    const { id } = req.params;
    let response = yield (0, Products_1.product)(id);
    res.send(response);
});
exports.getProduct = getProduct;
