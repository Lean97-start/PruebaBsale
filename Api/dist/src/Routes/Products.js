"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProduct = void 0;
const express_1 = require("express");
const Products_1 = require("../Controllers/Products");
const routerProduct = (0, express_1.Router)();
exports.routerProduct = routerProduct;
routerProduct.get('/:id', Products_1.getProduct);
routerProduct.get('/', Products_1.getAllProducts);
