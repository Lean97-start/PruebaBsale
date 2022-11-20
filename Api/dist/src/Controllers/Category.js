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
exports.getCategory = exports.getCategories = void 0;
const Category_1 = require("../Services/Category");
// Controller para obtener las categorias existentes en el sistema.
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let categoriesResponse = yield (0, Category_1.categories)();
    if (categoriesResponse.error_message) {
        return res.status(404).send(categoriesResponse);
    }
    //Valida la existencia de un error de producto no encontrado.
    res.send(categoriesResponse);
});
exports.getCategories = getCategories;
// Controller para obtener una categoria por ID enviada por params.
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params === null)
        res.status(400).json({ error_messagge: "NOT_ALLOWED_NULL_ID" });
    const { id } = req.params;
    let response = yield (0, Category_1.category)(id);
    if (response.error_message)
        return res.status(404).send(response);
    return res.send(response);
});
exports.getCategory = getCategory;
