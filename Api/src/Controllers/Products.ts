import { Request, Response } from "express";
import { AllProducts, product } from "../Services/Products";

// Controller que me permite obtener todos los productos existentes en el sistema.
export const getAllProducts = async (req: Request, res: Response) => {
    let products: any = await AllProducts();
    console.log(products)
    if(products.error_message){return res.status(404).send(products);} 
    return res.send(products);
};

// Controller que me permite obtener un producto con id que coincida con el id del producto pasado por params.
export const getProduct = async (req: Request, res: Response) => {
    if(req.params === null) res.status(400).json({error_message: "NOT_ALLOWED_NULL_ID"});
    const {id} = req.params;
    let response: any = await product(id);
    if(response.error_message){return res.status(404).send(response);} 
        // Valida la existencia de un mensaje de idCategory igual a null
    return res.send(response);
};
