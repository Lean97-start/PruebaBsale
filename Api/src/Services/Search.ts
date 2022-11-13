import { productsDB } from "../Query/Products";
import { ProductNameCategory } from "../interface/Product.Interface";
import { categories } from "./Category";
import { productWithCategory } from "./FormatProduct";

// Función encargada de traer productos que coincidan con el nombre pasado por parámetro.
export async function searchProducts(nameProduct: string) {
  try {
    let responseCategories: any = await categories();
    let productsSearched: Array<ProductNameCategory>;
    if (!nameProduct) { //Si no se paso un nameProduct por parámetro, se retornan todos los productos.
      let products: any = await productsDB();
      // Llama a la función para aplicar formato a los productos a retornar.
      productsSearched = productWithCategory(products, responseCategories, false);
    } else {
      let products: any = await productsDB();
      // Llama a la función para aplicar formato a los productos a retornar.
      productsSearched = productWithCategory(products, responseCategories, false , nameProduct);
    }
    return productsSearched.length //Valida si el retorno contiene productos, o si contiene un error.
      ? productsSearched
      : { error_message: "NOT_FOUND_PRODUCT"};
  } catch (error) {
    throw error;
  }
}
