import { Request, Response } from "express";
import {searchProducts as serviceSearchProduct} from "../Services/Search";

// Controller que me permite obtener productos con nombre coincidente con el nameProduct pasado por body.
export const searchProducts = async (req: Request, res: Response) => {
    const {nameProduct} = req.body
    let responseSearch = await serviceSearchProduct(nameProduct);
    res.send(responseSearch).sendStatus;
}