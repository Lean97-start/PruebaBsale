import {Router}  from 'express';
import { filterByCategory } from '../Controllers/Filters';

const routerFilterProduct = Router()

routerFilterProduct.post('/' , filterByCategory);

export {routerFilterProduct}