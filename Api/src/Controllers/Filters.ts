import {Request, Response} from 'express';
import {filterByCategory as filterCategory} from '../Services/Filter';

// Controller para filtrar por categoria 
const filterByCategory = async (req: Request, res: Response) => {
    const {idCategory} = req.body;
    const productsCategory = await filterCategory(idCategory);
    if(productsCategory.error_messageNull){res.status(400).send(productsCategory);} 
    //Valida la existencia de un mensaje de idCategory igual a null
    if(productsCategory.error_message){res.status(404).send(productsCategory);}
    //Valida la existencia de un error de producto no encontrado.
    res.send(productsCategory);
}

export {filterByCategory}