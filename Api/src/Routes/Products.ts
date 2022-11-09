import {Router}  from 'express';
import {getAllProducts, getProduct} from '../Controllers/Products';

const routerProduct = Router()

routerProduct.get('/:id' , getProduct);
routerProduct.get('/' , getAllProducts);

export {routerProduct}