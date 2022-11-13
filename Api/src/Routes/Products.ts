import {Router}  from 'express';
import {getAllProducts, getProduct} from '../Controllers/Products';

const routerProduct = Router()

routerProduct.get('/:id' , getProduct); //Trae un producto específico.
routerProduct.get('/' , getAllProducts); //Trae todos los productos existentes.

export {routerProduct}