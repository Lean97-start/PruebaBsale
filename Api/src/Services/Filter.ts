import { ProductWithCategory } from "../interface/Product.Interface";
import { filterByCategoryDB } from "../Query/Filter";

// Función encargada de traer los productos relacionados a una categoria.
export async function filterByCategory(idCategory: string) {
  try {
    if (!idCategory) {
      //Si no se pasa un numero de id, se devuelve error.
      return { error_messageNull: "ID_CATEGORY_NULL" };
    } else {
      let products: any = await filterByCategoryDB(parseInt(idCategory));
      let productsFiltereds: Array<ProductWithCategory> = products;
      return productsFiltereds.length? { products: productsFiltereds }: { error_message: "NOT_FOUND_PRODUCTS_CATEGORY" };
    }
  } catch (error) {
    // Si hay un problema con la petición a la base de datos, se genera un error.
    throw error;
  }
}     
