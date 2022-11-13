"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryDB = exports.categoriesDB = void 0;
const MySql_1 = require("../Config/MySql");
// Traer categorias existentes de la base de datos.
function categoriesDB() {
    return new Promise((res, rej) => {
        MySql_1.connection.query("SELECT * FROM category", (error, results) => {
            if (error)
                rej(error);
            res(results);
        });
    });
}
exports.categoriesDB = categoriesDB;
// Traer una categoria existentes de la base de datos que coincida con el id pasado por parámetro.
function categoryDB(idSearched) {
    return new Promise((res, rej) => {
        MySql_1.connection.query(`SELECT * FROM category WHERE id = ${idSearched}`, (error, results) => {
            if (error)
                rej(error);
            res(results);
        });
    });
}
exports.categoryDB = categoryDB;
