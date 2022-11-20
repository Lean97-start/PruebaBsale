"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByCategoryDB = void 0;
const MySql_1 = require("../Config/MySql");
function filterByCategoryDB(idCategory) {
    return new Promise((res, rej) => {
        MySql_1.connection.query(`
            Select  prod.id as id_prod, prod.name as product_name, prod.url_image,
                    prod.price, cat.id as id_cat, cat.name as cat_name
            FROM product as prod INNER JOIN category as cat
            ON prod.category = cat.id
            WHERE cat.id LIKE ("${idCategory}");
        `, (error, results) => {
            if (error)
                rej(error);
            res(results);
        });
    });
}
exports.filterByCategoryDB = filterByCategoryDB;
