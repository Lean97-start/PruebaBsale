import { connection } from "../Config/MySql";

export function productsDB(){
    return new Promise((res, rej) => {
        connection.query("SELECT * FROM product", (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
}
export function productDB(idSearched: string){
    return new Promise((res, rej) => {
        connection.query(`SELECT * FROM product WHERE id = ${idSearched}`, (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
   
}