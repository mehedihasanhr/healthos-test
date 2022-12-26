export type productType = {
    id: number;
    name: string;
    price: number;
    discount: number;
    category: {
        main: string;
        sub: string;
    };
    gander: string;
    size: string[];
    color: string[];
    stock: number;
    images: string[];
    description: string;
    rating: number;
    reviews: number;
    details: string;
    brand: string;
    shipping: string;
    warrenty: string;
    tags: string[];
};

export type ProductDataTablePropsType = {
    data: productType[];
};
