export interface Billboard {
    id: string;
    value: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
    sortCategoryId: number;
}

export interface SortCategory {
    id: string;
    sortName: string;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: Boolean;
    size: Size;
    color: Color;
    images: Image[];
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string
}

export interface Color {
    id: string;
    name: string;
    value: string;
}