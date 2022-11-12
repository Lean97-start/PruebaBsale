import { productsDB } from "../Query/Products";
import { Category, ProductNameCategory } from "../interface/Product.Interface";
import { categories } from "./Category";

function productWithCategory(products: Array<ProductNameCategory>, responseCategories: any, nameProduct?: string) {
  let productsSearched: Array<ProductNameCategory> = [];
  if (nameProduct) {
    products.forEach((product: ProductNameCategory) => {
      if (product.name.includes(nameProduct.toUpperCase())) {
        responseCategories.forEach((category: Category) => {
          if (category.id == 0) {
            return responseCategories;
          } else if (category.id === product.category) {
            product.nameCategory = category.name;
            productsSearched.push(product);
          }
        });
      }
    });
  } else {
    products.forEach((product: ProductNameCategory) => {
      responseCategories.forEach((category: Category) => {
        if (category.id == 0) {
          return responseCategories;
        } else if (category.id === product.category) {
          product.nameCategory = category.name;
          productsSearched.push(product);
        }
      });
    });
  }
  return productsSearched;
}

export async function searchProducts(nameProduct: string) {
  try {
    let responseCategories: any = await categories();
    let productsSearched: Array<ProductNameCategory>;
    if (!nameProduct) {
      let products: any = await productsDB();
      productsSearched = productWithCategory(products, responseCategories,);
    } else {
      let products: any = await productsDB();
      productsSearched = productWithCategory(products, responseCategories, nameProduct);
    }
    return productsSearched.length
      ? productsSearched
      : { Error_message: "NOT_FOUND_PRODUCT" };
  } catch (error) {
    throw error;
  }
}
