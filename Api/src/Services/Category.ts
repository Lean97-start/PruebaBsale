import { categoriesDB, categoryDB } from "../Query/Category";
import { Category } from "../interface/Product.Interface";
//Funcion encargada de traer las cagorias
export async function categories(){
        let categories: any = await categoriesDB();
        let categoriesSearched: Array<Category> = categories;
        //Si no encuentra categorias, retorna error    
        return ((categoriesSearched.length)? categoriesSearched: {error_message: "CATEGORIES_NOT_FOUND"});   
}

// Funcion encargada de traer una categoria especifica
export async function category(id: string){
        let category: any= await categoryDB(id);
        let categorySearched : Array<Category> = category;
        //Si no encuentra la categoria especificada, retorna error   
        return ((categorySearched.length)? categorySearched: {error_message: "CATEGORY_NOT_FOUND"});       
}