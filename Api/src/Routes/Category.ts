import {Router}  from 'express';
import { getCategories, getCategory } from '../Controllers/Category';


const routerCategory = Router();

routerCategory.get('/:id' , getCategory); //Trae una categoria especifica.
routerCategory.get('/' , getCategories); //Trae todas las categorias.

export {routerCategory}