import { connection } from "../Config/MySql";

export function categoriesDB(){
    return new Promise((res, rej) => {
        connection.query("SELECT * FROM category", (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })  
}

export function categoryDB(idSearched: string){
    return new Promise((res, rej) => {
        connection.query(`SELECT * FROM category WHERE id = ${idSearched}`, (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
   
}