import { categoriesDB, categoryDB } from "../Query/Category";

export async function categories(){
        let categories = await categoriesDB();
        return ((categories)? categories: [{id: 0, name: "CATEGORY_NOT_FOUND"}]);       
}

export async function category(id: string){
        let category= await categoryDB(id);
        return ((category)? category: [{id: 0, name: "CATEGORY_NOT_FOUND"}]);       
}