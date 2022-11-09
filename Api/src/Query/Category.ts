import { connection } from "../Config/MySql";

export function productsDB(){
    return new Promise((res, rej) => {
        connection.query("SELECT * FROM category", (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
   
}