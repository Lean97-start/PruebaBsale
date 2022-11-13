import { Product } from "../interface/Product.Interface";
import { categoriesDB } from "../Query/Category";
import { productsDB } from "../Query/Products";
import { productWithCategory } from "./FormatProduct";

export async function filterByCategory(idCategory: string) {
  try {
    let productsCategory: Array<Product> = [];
    let products: any = await productsDB();
    let category: any = await categoriesDB();
    if (!idCategory) {
      return { error_message: "ID_CATEGORY_NULL" };
    } else {
      productsCategory = productWithCategory(products, category, idCategory);
      return productsCategory.length? { products: productsCategory }: { message: "NOT_FOUND_PRODUCTS_CATEGORY" };
    }
  } catch (error) {
    throw error;
  }
}
