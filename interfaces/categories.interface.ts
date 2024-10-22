import { ProductItem } from "./product.interface";


export interface CategoryInterface {
    results: CategoryItem[],
    total_count: number,
    limit: number,
    offset: number,
}

export interface CategoryItem {
    id: number,
    name: string,
    category_for: string,
    object_list: ProductItem[],
}

export interface CategoryObjectItem {
    type: string,
    id: number,
    name: string,
    description: string,
}
