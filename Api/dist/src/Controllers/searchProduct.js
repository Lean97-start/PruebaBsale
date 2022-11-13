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
exports.searchProducts = void 0;
const Search_1 = require("../Services/Search");
// Controller que me permite obtener productos con nombre coincidente con el nameProduct pasado por body.
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nameProduct } = req.body;
    let responseSearch = yield (0, Search_1.searchProducts)(nameProduct);
    res.send(responseSearch).sendStatus;
});
exports.searchProducts = searchProducts;
