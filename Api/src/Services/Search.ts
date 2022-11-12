import { productsDB } from "../Query/Products";
import { Product , ProductNameCategory } from "../interface/Product.Interface";
import { categoriesDB } from "../Query/Category";

export async function searchProducts(nameProduct: string) {
  try {
    let productsSearched: Array<ProductNameCategory> = [];
    if (!nameProduct) {
      return await productsDB();
    } else {
      let products: any = await productsDB();
      // let category: any = await categoriesDB();
      // let nameCategoryDB: string = "";
      // products.forEach((element: Product) => {
      //   if (element.name.includes(nameProduct.toUpperCase())) {
      //     productsSearched.push(element);
      //   }
      // }); 
      return (productsSearched.length)? productsSearched: {Error_message: "NOT_FOUND_PRODUCT"};
    }
  } catch (error) {
    throw error
  }
}
