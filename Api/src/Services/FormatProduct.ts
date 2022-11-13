import { Category, ProductNameCategory } from "../interface/Product.Interface";

// Función encargada de darle formato a los productos, según sea el caso.
export function productWithCategory(products: Array<ProductNameCategory>, responseCategories: any, idCategory: string | boolean, nameProduct?: string) {
    let productsSearched: Array<ProductNameCategory> = [];
    if (nameProduct) {
      // Aplica formato al producto buscado por nombre.
      products.forEach((product: ProductNameCategory) => {
        if (product.name.toUpperCase().includes(nameProduct.toUpperCase())) {
          responseCategories.forEach((category: Category) => {
            if (category.id == 0) { //Si es igual a 0, significa que es un error y no se encontraron categorias.
              return responseCategories;
            } else if (category.id === product.category) { 
              //Si la categoria es igual a la buscada, agrega el nombre de la categoria a la propiedad "nameCategory" y la agrega al arreglo.
              product.nameCategory = category.name;
              productsSearched.push(product);
            }
          });
        }
      });
    } else if(idCategory && nameProduct == undefined){
      // Aplica formato al producto buscado por categoria.
      products.forEach((product: ProductNameCategory) => {
        if(idCategory === product.category.toString()){
          responseCategories.forEach((category: Category) => {
            if (category.id == 0) { //Si es igual a 0, significa que es un error y no se encontraron categorias.
              return responseCategories;
            } else if (category.id === product.category) {
              //Si la categoria es igual a la buscada, agrega el nombre de la categoria a la propiedad "nameCategory" y la agrega al arreglo.
              product.nameCategory = category.name;
              productsSearched.push(product);
            }
          });
        }
      });
    } else { 
      // Aplica formato a todos los productos asignandole el nombre por producto de la categoria a la que pertenece.
      products.forEach((product: ProductNameCategory) => {
        responseCategories.forEach((category: Category) => {
          if (category.id == 0) { //Si es igual a 0, significa que es un error y no se encontraron categorias.
            return responseCategories;
          } else if (category.id === product.category) {
            //Si la categoria es igual a la buscada, agrega el nombre de la categoria a la propiedad "nameCategory" y la agrega al arreglo.
            product.nameCategory = category.name;
            productsSearched.push(product);
          }
        });
      });
    }
    return productsSearched;
  }