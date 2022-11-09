import { Request, Response } from "express";
import { AllProducts, product } from "../Services/Products";

export const getAllProducts = async (req: Request, res: Response) => {
    res.send(await AllProducts());
};

export const getProduct = async (req: Request, res: Response) => {
    if(req.params === null) res.status(400).json({err: "BAD_REQUEST"});
    const {id} = req.params;
    let response: any = await product(id);
    res.send(response);
};
