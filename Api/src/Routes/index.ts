import {Router} from 'express';
import { routerCategory } from './Category';
import { routerFilterProduct } from './filter_Products';
import { routerProduct } from "./Products";
import { routerSearch } from './searchProduct';

const router = Router();

router.use('/products', routerProduct);
router.use('/filterProduct', routerFilterProduct);
router.use('/category', routerCategory);
router.use('/search', routerSearch);

export = {router};