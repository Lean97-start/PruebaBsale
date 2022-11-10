"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerFilterProduct = void 0;
const express_1 = require("express");
const Filters_1 = require("../Controllers/Filters");
const routerFilterProduct = (0, express_1.Router)();
exports.routerFilterProduct = routerFilterProduct;
routerFilterProduct.post('/', Filters_1.filterByCategory);
