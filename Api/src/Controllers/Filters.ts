import {Request, Response} from 'express';
import {filterByCategory as filterCategory} from '../Services/Filter';

// Controller para filtrar por categoria 
const filterByCategory = async (req: Request, res: Response) => {
    try {
        if(!req.body.hasOwnProperty('idCategory')){return res.status(400).json({error_message: "NOT_ALLOWED_NULL_ID"})}
        const {idCategory} = req.body;
        const productsCategory: any = await filterCategory(idCategory);
        if(productsCategory.error_messageNull){return res.status(400).send(productsCategory);} 
        // Valida la existencia de un mensaje de idCategory igual a null
        if(productsCategory.error_message){return res.status(404).send(productsCategory);}
        //Valida la existencia de un error de producto no encontrado.
        return res.send(productsCategory);     
    } catch (error) {
        return res.status(500).json({error_message: "Error_server"})
    }
} 
 
export {filterByCategory}