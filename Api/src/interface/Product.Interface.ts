interface Product {
    id: number;
    name: string;
    url_image: string;
    price: number;
    discount: number;
    category: number;
}

interface ProductNameCategory extends Product{
    nameCategory?: string;
}

interface Category{
    id: number,
    name: string
}

export {Product, ProductNameCategory, Category}