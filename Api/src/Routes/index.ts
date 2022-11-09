import {Router} from 'express';
import { routerCategory } from './Category';
import { routerProduct } from "./Products";

const router = Router();

router.use('/products', routerProduct);
router.use('/filterProduct', routerProduct);
router.use('/category', routerCategory);

export = {router};