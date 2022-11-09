import { Router } from "express";
import { searchProductsByCategory } from "../Controllers/searchProduct";

const routerSearch = Router();

routerSearch.post('/', searchProductsByCategory)

export {routerSearch}