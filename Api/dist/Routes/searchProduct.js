"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerSearch = void 0;
const express_1 = require("express");
const searchProduct_1 = require("../Controllers/searchProduct");
const routerSearch = (0, express_1.Router)();
exports.routerSearch = routerSearch;
routerSearch.post('/', searchProduct_1.searchProducts);
