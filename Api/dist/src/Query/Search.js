"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByName = void 0;
const MySql_1 = require("../Config/MySql");
// Traer de la base de datos los productos existentes que coinciden con el nombre buscado.
function searchByName(nameProduct) {
    return new Promise((res, rej) => {
        MySql_1.connection.query(`
        SELECT  prod.id as id_prod, prod.name as product_name, prod.url_image,
                prod.price, cat.id as id_cat, cat.name as cat_name
        FROM product as prod INNER JOIN category as cat
        ON prod.category = cat.id
        WHERE prod.name LIKE ("%${nameProduct}%");
        `, (error, result) => {
            if (error)
                rej(error);
            res(result);
        });
    });
}
exports.searchByName = searchByName;
//CONTAINS(name, "${nameProduct}" WHERE "name" = '${nameProduct}'
