import {Router} from 'express';
import { routerProduct } from "./Products";

const router = Router();

router.use('/products', routerProduct);
router.use('/filterProduct', routerProduct);

export = {router};