import { productsDB, productDB } from "../Query/Products";

export async function AllProducts() {
    let products = await productsDB();
    return products? products: {err: products};
}

export async function product(id: string){
    let product = await productDB(id);
    return product? product: {err: product};
}
