import { Request, Response } from "express";
import {searchProductsByCategory as serviceSearchProduct} from "../Services/Search";

export const searchProductsByCategory = async (req: Request, res: Response) => {
    const {category} = req.body
    let responseSearch = await serviceSearchProduct(category);
    res.status(200).send(responseSearch);
}