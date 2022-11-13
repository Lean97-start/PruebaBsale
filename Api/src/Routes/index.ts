import {Router} from 'express';
import { routerCategory } from './Category';
import { routerFilterByCategoryProduct } from './filter_Products';
import { routerProduct } from "./Products";
import { routerSearch } from './searchProduct';

const router = Router();

router.use('/v1/products', routerProduct);
router.use('/v1/filterProduct', routerFilterByCategoryProduct);
router.use('/v1/category', routerCategory);
router.use('/v1/search', routerSearch);

export = {router};