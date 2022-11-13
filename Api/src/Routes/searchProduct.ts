import { Router } from "express";
import { searchProducts } from "../Controllers/searchProduct";

const routerSearch = Router();

routerSearch.post('/', searchProducts) //Trae los productos que coincidan con la búsqueda.

export {routerSearch}