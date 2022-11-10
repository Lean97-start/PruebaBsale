import { Product } from "../interface/Product.Interface"
import { productsDB } from "../Query/Products";

//VER SI ES MEJOR ESTABLECER UNA INTERFAZ PARA LOS ERRORES.

export async function filterByCategory(idCategory: string){
    try {
        let productsCategory: Array<Product> = [];
        let products: any = await productsDB();
        if(!idCategory){
            return ({error_message: "ID_CATEGORY_NULL"});
        }else{
            products.forEach((product: Product )=> {
                if (product.category.toString() === idCategory) {
                    productsCategory.push(product);
                }
            });
            return (products.length)? productsCategory : {message: "NOT_FOUND_PRODUCTS_CATEGORY"};
        }    
    } catch (error) {
        throw error
    }
}