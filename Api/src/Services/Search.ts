import { productsDB } from "../Query/Products";
import { ProductNameCategory } from "../interface/Product.Interface";
import { categories } from "./Category";
import { productWithCategory } from "./FormatProduct";

export async function searchProducts(nameProduct: string) {
  try {
    let responseCategories: any = await categories();
    let productsSearched: Array<ProductNameCategory>;
    if (!nameProduct) {
      let products: any = await productsDB();
      productsSearched = productWithCategory(products, responseCategories, false);
    } else {
      let products: any = await productsDB();
      productsSearched = productWithCategory(products, responseCategories, false , nameProduct);
    }
    return productsSearched.length
      ? productsSearched
      : { Error_message: "NOT_FOUND_PRODUCT" };
  } catch (error) {
    throw error;
  }
}
