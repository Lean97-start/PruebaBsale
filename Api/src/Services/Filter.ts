import { Product } from "../interface/Product.Interface";
import { categoriesDB } from "../Query/Category";
import { productsDB } from "../Query/Products";
import { productWithCategory } from "./FormatProduct";

// Función encargada de traer los productos relacionados a una categoria.
export async function filterByCategory(idCategory: string) {
  try {
    let productsCategory: Array<Product> = [];
    let products: any = await productsDB();
    let category: any = await categoriesDB();
    if (!idCategory) {
      return { error_messageNull: "ID_CATEGORY_NULL" };
    } else {
      productsCategory = productWithCategory(products, category, idCategory);
      return productsCategory.length? { products: productsCategory }: { error_message: "NOT_FOUND_PRODUCTS_CATEGORY" };
    }
  } catch (error) {
    // Si hay un problema con la petición a la base de datos, se genera un error.
    throw error; 
  }
}
