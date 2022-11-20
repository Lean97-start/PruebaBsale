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
    try {
        const { nameProduct } = req.body;
        let responseSearch = yield (0, Search_1.searchProducts)(nameProduct);
        if (responseSearch.error_message) {
            return res.status(404).send(responseSearch);
        }
        // Valida la existencia de un mensaje de idCategory igual a null
        return res.send(responseSearch).sendStatus;
    }
    catch (error) {
        return res.status(500).json({ error_message: " Error_Server " });
    }
});
exports.searchProducts = searchProducts;
