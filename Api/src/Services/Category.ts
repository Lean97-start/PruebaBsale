import { categoriesDB, categoryDB } from "../Query/Category";

//Funcion encargada de traer las cagorias
export async function categories(){
        let categories = await categoriesDB();
        //Si no encuentra categorias, retorna error    
        return ((categories)? categories: [{id: 0, name: "CATEGORIES_NOT_FOUND"}]);   
}

// Funcion encargada de traer una categoria especifica
export async function category(id: string){
        let category= await categoryDB(id);
        //Si no encuentra la categoria especificada, retorna error    
        return ((category)? category: [{id: 0, name: "CATEGORY_NOT_FOUND"}]);       
}