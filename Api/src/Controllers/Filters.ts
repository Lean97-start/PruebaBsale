import {Request, Response} from 'express';
import {filterByCategory as filterCategory} from '../Services/Filter';

const filterByCategory = async (req: Request, res: Response) => {
    const {idCategory} = req.body;
    const productsCategory = await filterCategory(idCategory);
    if(productsCategory.error_messageNull){res.status(400).send(productsCategory);}
    if(productsCategory.error_message){res.status(404).send(productsCategory);}
    res.send(productsCategory);
}

export {filterByCategory}