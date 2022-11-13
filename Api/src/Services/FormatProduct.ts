import { Category, ProductNameCategory } from "../interface/Product.Interface";

export function productWithCategory(products: Array<ProductNameCategory>, responseCategories: any, idCategory: string | boolean, nameProduct?: string) {
    let productsSearched: Array<ProductNameCategory> = [];
    if (nameProduct) {
      products.forEach((product: ProductNameCategory) => {
        if (product.name.toUpperCase().includes(nameProduct.toUpperCase())) {
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
    } else if(idCategory && nameProduct == undefined){
      products.forEach((product: ProductNameCategory) => {
        if(idCategory === product.category.toString()){
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