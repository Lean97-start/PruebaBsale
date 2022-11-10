"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDB = exports.productsDB = void 0;
const MySql_1 = require("../Config/MySql");
function productsDB() {
    return new Promise((res, rej) => {
        MySql_1.connection.query("SELECT * FROM product", (error, results) => {
            if (error)
                rej(error);
            res(results);
        });
    });
}
exports.productsDB = productsDB;
function productDB(idSearched) {
    return new Promise((res, rej) => {
        MySql_1.connection.query(`SELECT * FROM product WHERE id = ${idSearched}`, (error, results) => {
            if (error)
                rej(error);
            res(results);
        });
    });
}
exports.productDB = productDB;
