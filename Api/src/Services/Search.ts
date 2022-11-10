import { productsDB } from "../Query/Products";
import { Product } from "../interface/Product.Interface";

export async function searchProducts(nameProduct: string) {
  try {
    let productsSearched: Array<Product> = [];
    if (!nameProduct) {
      return await productsDB();
    } else {
      let products: any = await productsDB();
      products.forEach((element: Product) => {
        if (element.name.includes(nameProduct.toUpperCase())) {
          productsSearched.push(element);
        }
      });
      return (productsSearched.length)? productsSearched: {Error_message: "NOT_FOUND_PRODUCT"};
    }
  } catch (error) {
    throw error
  }
}
