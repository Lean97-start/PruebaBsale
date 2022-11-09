import { productsDB } from "../Query/Products";
import { Product } from "../interface/Product.Interface";


export async function searchProductsByCategory(category: string) {
  let productsByCategory: Array<Product> = [];
  let products: any = await productsDB();
  products.forEach((element: Product) => {
    if (element.category.toString() === category) {
        productsByCategory.push(element)
    }
  });
  console.log(productsByCategory)
  return productsByCategory
}
