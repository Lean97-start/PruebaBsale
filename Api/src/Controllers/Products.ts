import { Request, Response } from "express";
import { AllProducts, product } from "../Services/Products";

// Controller que me permite obtener todos los productos existentes en el sistema.
export const getAllProducts = async (req: Request, res: Response) => {
    res.send(await AllProducts());
};

// Controller que me permite obtener un producto con id que coincida con el id del producto pasado por params.
export const getProduct = async (req: Request, res: Response) => {
    if(req.params === null) res.status(400).json({err: "BAD_REQUEST"});
    const {id} = req.params;
    let response: any = await product(id);
    res.send(response);
};
