import { productsDB, productDB } from "../Query/Products";
import { productWithCategory } from "./FormatProduct";
import { categories } from "./Category";
import { ProductNameCategory } from "../interface/Product.Interface";

export async function AllProducts() {
    let productsSearched: Array<ProductNameCategory>;
    let products: any = await productsDB();
    let responseCategories: any = await categories();
    productsSearched = productWithCategory(products, responseCategories, false)
    return productsSearched.length? productsSearched: {Error_message: "NOT_FOUND_PRODUCT" };
}

export async function product(id: string){
    let productSearched: Array<ProductNameCategory>;
    let product: any = await productDB(id);
    let responseCategories: any = await categories();
    productSearched = productWithCategory(product, responseCategories, false)
    return productSearched.length? productSearched: {Error_message: "NOT_FOUND_PRODUCT"};
}
