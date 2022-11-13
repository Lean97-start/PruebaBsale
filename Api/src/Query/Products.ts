import { connection } from "../Config/MySql";

// Traer de la base de datos los productos existentes.
export function productsDB(){
    return new Promise((res, rej) => {
        connection.query("SELECT * FROM product", (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
}

// Traer de la base de datos un producto con id coincidente con el id pasado por parámetro.
export function productDB(idSearched: string){
    return new Promise((res, rej) => {
        connection.query(`SELECT * FROM product WHERE id = ${idSearched}`, (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
   
}