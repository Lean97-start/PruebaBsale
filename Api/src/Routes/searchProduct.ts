import { Router } from "express";
import { searchProducts } from "../Controllers/searchProduct";

const routerSearch = Router();

routerSearch.post('/', searchProducts)

export {routerSearch}