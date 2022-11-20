"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDB = exports.productsDB = void 0;
const MySql_1 = require("../Config/MySql");
// Traer de la base de datos los productos existentes.
function productsDB() {
    return new Promise((res, rej) => {
        MySql_1.connection.query(`
            Select  prod.id as id_prod, prod.name as product_name, prod.url_image,
                    prod.price, cat.id as id_cat, cat.name as cat_name
            FROM product as prod INNER JOIN category as cat
            ON prod.category = cat.id
        `, (error, results) => {
            if (error)
                rej(error);
            res(results);
        });
    });
}
exports.productsDB = productsDB;
// Traer de la base de datos un producto con id coincidente con el id pasado por parámetro.
function productDB(idSearched) {
    return new Promise((res, rej) => {
        MySql_1.connection.query(`
            Select  prod.id as id_prod, prod.name as product_name, prod.url_image,
                    prod.price, cat.id as id_cat, cat.name as cat_name
            FROM product as prod INNER JOIN category as cat
            ON prod.category = cat.id 
            WHERE prod.id = ${idSearched}
            `, (error, results) => {
            if (error)
                rej(error);
            res(results);
        });
    });
}
exports.productDB = productDB;
