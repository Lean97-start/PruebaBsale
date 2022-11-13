import {Router}  from 'express';
import { filterByCategory } from '../Controllers/Filters';

const routerFilterByCategoryProduct = Router();

routerFilterByCategoryProduct.post('/' , filterByCategory); //Trae los productos asociados a una categoria.

export {routerFilterByCategoryProduct}