import { Request, Response } from "express";
import { category, categories } from "../Services/Category";

// Controller para obtener las categorias existentes en el sistema.
export const getCategories = async (req: Request, res: Response) => {
    res.send(await categories());
}

// Controller para obtener una categoria por ID enviada por params.
export const getCategory = async (req: Request, res: Response) => {
    if(req.params === null) res.status(400).json({err: "BAD_REQUEST"});
    const {id} = req.params;
    let response: any = await category(id);
    if(!response.length) res.status(400).send({err: "ERROR_ID_CATEGORY"})
    res.send(response);
};