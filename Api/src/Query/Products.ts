import { connection } from "../Config/MySql";

// Traer de la base de datos los productos existentes.
export function productsDB(){
    return new Promise((res, rej) => {
        connection.query(`
            Select  prod.id as id_prod, prod.name as product_name, prod.url_image,
                    prod.price, cat.id as id_cat, cat.name as cat_name
            FROM product as prod INNER JOIN category as cat
            ON prod.category = cat.id
        `, (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
}

// Traer de la base de datos un producto con id coincidente con el id pasado por parámetro.
export function productDB(idSearched: string){
    return new Promise((res, rej) => {
        connection.query(`
            Select  prod.id as id_prod, prod.name as product_name, prod.url_image,
                    prod.price, cat.id as id_cat, cat.name as cat_name
            FROM product as prod INNER JOIN category as cat
            ON prod.category = cat.id 
            WHERE prod.id = ${idSearched}
            `, (error: any, results: any) => {
            if(error) rej (error);
            res(results);
        });
    })
   
}