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
    res.send(yield (0, Category_1.categories)());
});
exports.getCategories = getCategories;
// Controller para obtener una categoria por ID enviada por params.
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params === null)
        res.status(400).json({ err: "BAD_REQUEST" });
    const { id } = req.params;
    let response = yield (0, Category_1.category)(id);
    if (!response.length)
        res.status(400).send({ err: "ERROR_ID_CATEGORY" });
    res.send(response);
});
exports.getCategory = getCategory;
