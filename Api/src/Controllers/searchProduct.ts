import { Request, Response } from "express";
import {searchProducts as serviceSearchProduct} from "../Services/Search";

// Controller que me permite obtener productos con nombre coincidente con el nameProduct pasado por body.
export const searchProducts = async (req: Request, res: Response) => {
    try {
        const {nameProduct} = req.body
        let responseSearch = await serviceSearchProduct(nameProduct);
        if(responseSearch.error_message){return res.status(404).send(responseSearch);} 
        // Valida la existencia de un mensaje de idCategory igual a null
        return res.send(responseSearch).sendStatus;     
    } catch (error) {
        return res.status(500).json({error_message: " Error_Server "})
    }
}