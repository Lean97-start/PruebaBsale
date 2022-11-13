import {Router}  from 'express';
import { filterByCategory } from '../Controllers/Filters';

const routerFilterByCategoryProduct = Router()

routerFilterByCategoryProduct.post('/' , filterByCategory);

export {routerFilterByCategoryProduct}