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
exports.category = exports.categories = void 0;
const Category_1 = require("../Query/Category");
function categories() {
    return __awaiter(this, void 0, void 0, function* () {
        let categories = yield (0, Category_1.categoriesDB)();
        return ((categories) ? categories : [{ id: 0, name: "CATEGORY_NOT_FOUND" }]);
    });
}
exports.categories = categories;
function category(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let category = yield (0, Category_1.categoryDB)(id);
        return ((category) ? category : [{ id: 0, name: "CATEGORY_NOT_FOUND" }]);
    });
}
exports.category = category;
