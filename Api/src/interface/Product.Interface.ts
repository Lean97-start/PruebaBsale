// Interface parametrizable de producto.
interface Product {
    id: number;
    name: string;
    url_image: string;
    price: number;
    discount: number;
    category: number;
}
// Interface parametrizable de producto con propiedad nameCategory
interface ProductNameCategory extends Product{
    nameCategory?: string;
}

// Interface parametrizable de categoria.
interface Category{
    id: number,
    name: string
}

export {Product, ProductNameCategory, Category}