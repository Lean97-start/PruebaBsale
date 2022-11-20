import { Request, Response } from "express";
import { category, categories } from "../Services/Category";

// Controller para obtener las categorias existentes en el sistema.
export const getCategories = async (req: Request, res: Response) => {
    let categoriesResponse: any = await categories();
    if(categoriesResponse.error_message){return res.status(404).send(categoriesResponse);}
        //Valida la existencia de un error de producto no encontrado.
    res.send(categoriesResponse);
}

// Controller para obtener una categoria por ID enviada por params.
export const getCategory = async (req: Request, res: Response) => {
    if(req.params === null) res.status(400).json({error_messagge: "NOT_ALLOWED_NULL_ID"});
    const {id} = req.params;
    let response: any = await category(id);
    if(response.error_message) return res.status(404).send(response);
    return res.send(response);
};