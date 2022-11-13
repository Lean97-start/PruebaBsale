"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCategory = void 0;
const express_1 = require("express");
const Category_1 = require("../Controllers/Category");
const routerCategory = (0, express_1.Router)();
exports.routerCategory = routerCategory;
routerCategory.get('/:id', Category_1.getCategory); //Trae una categoria especifica.
routerCategory.get('/', Category_1.getCategories); //Trae todas las categorias.
