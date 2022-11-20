import { productsDB, productDB } from "../Query/Products";
import { ProductWithCategory } from "../interface/Product.Interface";

// Función encargada de traer todos los productos del sistema
export async function AllProducts() {
        try {
                let productsSearched:any = await productsDB();
                let productsWithCategory: Array<ProductWithCategory> = productsSearched;
                return productsWithCategory.length? productsWithCategory: {error_message: "NOT_FOUND_PRODUCT" };       
                
        } catch (error) {
                throw error
        }
}

// Función encargada de traer un producto del sistema coincidente con el id pasado por parámetro.
export async function product(id: string){
        try {
                let product: any = await productDB(id);
                let productSearchedWithCategory: Array<ProductWithCategory> = product;
                return productSearchedWithCategory.length? productSearchedWithCategory: {error_message: "NOT_FOUND_PRODUCT"};                
        } catch (error) {
                throw error    
        }
}
