import {Request, Response} from 'express';
import {filterByCategory as filterCategory} from '../Services/Filter';

const filterByCategory = async (req: Request, res: Response) => {
    const {idCategory} = req.body;
    const productsCategory = await filterCategory(idCategory);
    res.send(productsCategory);
}

export {filterByCategory}