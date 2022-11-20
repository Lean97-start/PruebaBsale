import { connection } from "../Config/MySql";

export function filterByCategoryDB(idCategory: number){
    return new Promise((res, rej) => {
        connection.query(`
            Select  prod.id as id_prod, prod.name as product_name, prod.url_image,
                    prod.price, cat.id as id_cat, cat.name as cat_name
            FROM product as prod INNER JOIN category as cat
            ON prod.category = cat.id
            WHERE cat.id LIKE ("${idCategory}");
        `, (error: any, results: any) => {
            if(error) rej(error);
            res(results);
        });
    })
} 