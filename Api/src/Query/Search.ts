import { connection } from "../Config/MySql";

// Traer de la base de datos los productos existentes que coinciden con el nombre buscado.
export function searchByName(nameProduct: string){
    return new Promise((res, rej) => {
        connection.query(`
        SELECT  prod.id as id_prod, prod.name as product_name, prod.url_image,
                prod.price, cat.id as id_cat, cat.name as cat_name
        FROM product as prod INNER JOIN category as cat
        ON prod.category = cat.id
        WHERE prod.name LIKE ("%${nameProduct}%");
        `, (error: any, result: any) => {
            if(error) rej(error);
            res(result);
        });
    })
} 
//CONTAINS(name, "${nameProduct}" WHERE "name" = '${nameProduct}'