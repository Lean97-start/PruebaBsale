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
exports.filterByCategory = void 0;
const Filter_1 = require("../Services/Filter");
// Controller para filtrar por categoria 
const filterByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idCategory } = req.body;
    const productsCategory = yield (0, Filter_1.filterByCategory)(idCategory);
    if (productsCategory.error_messageNull) {
        res.status(400).send(productsCategory);
    }
    //Valida la existencia de un mensaje de idCategory igual a null
    if (productsCategory.error_message) {
        res.status(404).send(productsCategory);
    }
    //Valida la existencia de un error de producto no encontrado.
    res.send(productsCategory);
});
exports.filterByCategory = filterByCategory;
