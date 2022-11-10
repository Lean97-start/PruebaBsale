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
exports.connection = exports.initDB = void 0;
require("dotenv/config");
const mysql = require("mysql");
let dataConfigDB = {
    host: process.env.host || "localhost",
    user: process.env.user || "me",
    password: process.env.password || "123456",
    database: process.env.database || "Prueba",
};
let connection;
exports.connection = connection;
function initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            exports.connection = connection = mysql.createConnection(dataConfigDB);
            yield connection.connect((error) => {
                if (error) {
                    console.log("Error connecting. Try again", error);
                    initDB();
                }
                else {
                    console.log("Connected database");
                }
            });
            connection.on("error", (err) => {
                console.log("Error db", err.code);
                if (err.code === "PROTOCOL_CONNECTION_LOST") {
                    initDB();
                }
                else {
                    throw err;
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.initDB = initDB;
