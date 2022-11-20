import { productsDB } from "../Query/Products";
import { searchByName } from "../Query/Search";

// Función encargada de traer productos que coincidan con el nombre pasado por parámetro.
export async function searchProducts(nameProduct: string) {
  try {
    if (!nameProduct) { //Si no se paso un nameProduct por parámetro, se retornan todos los productos.
      let productsSearched: any = await productsDB();
      // Llama a la función para aplicar formato a los productos a retornar.
      return productsSearched.length ? productsSearched: { error_message: "NOT_FOUND_PRODUCT"};
      //Valida si el retorno contiene productos, o si contiene un error.
    } 
    let productsSearched: any = await searchByName(nameProduct.toUpperCase());
    return productsSearched.length? productsSearched: { error_message: "NOT_FOUND_PRODUCT"};
    //Valida si el retorno contiene productos, o si contiene un error.
  } catch (error) {
    throw error;
  }
}
