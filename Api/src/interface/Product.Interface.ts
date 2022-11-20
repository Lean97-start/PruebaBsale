// Interface parametrizable de producto.
interface ProductWithCategory {
    id_prod: number;
    product_name: string;
    url_image: string;
    price: number;
    id_cat: number;
    cat_name: string;
    discount?: number;
}

// Interface parametrizable de categoria.
interface Category{
    id: number,
    name: string
}

export { ProductWithCategory, Category }