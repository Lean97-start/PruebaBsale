"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerFilterByCategoryProduct = void 0;
const express_1 = require("express");
const Filters_1 = require("../Controllers/Filters");
const routerFilterByCategoryProduct = (0, express_1.Router)();
exports.routerFilterByCategoryProduct = routerFilterByCategoryProduct;
routerFilterByCategoryProduct.post('/', Filters_1.filterByCategory); //Trae los productos asociados a una categoria.
