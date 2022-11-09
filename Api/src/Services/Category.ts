import { categoriesDB, categoryDB } from "../Query/Category";

export async function categories(){
    return await categoriesDB();
}


export async function category(id: string){
    let category= await categoryDB(id);
    return category? category: {err: category};
}