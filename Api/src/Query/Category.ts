import { connection } from "../Config/MySql";

// Traer categorias existentes de la base de datos.
export function categoriesDB(){
    return new Promise((res, rej) => {
        connection.query("SELECT * FROM category", (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })  
}

// Traer una categoria existentes de la base de datos que coincida con el id pasado por parámetro.
export function categoryDB(idSearched: string){
    return new Promise((res, rej) => {
        connection.query(`SELECT * FROM category WHERE id = ${idSearched}`, (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
   
}