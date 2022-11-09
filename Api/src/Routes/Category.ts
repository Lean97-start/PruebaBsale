import {Router}  from 'express';
import { getCategories, getCategory } from '../Controllers/Category';


const routerCategory = Router()

routerCategory.get('/:id' , getCategory);
routerCategory.get('/' , getCategories);

export {routerCategory}