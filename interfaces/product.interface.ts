export interface ProductsInterface {
    results: ProductItem[],
    total_count: number,
    limit: number,
    offset: number,
}

export interface ProductsState extends ProductsInterface {
    activeType: string;
}

export interface ProductItem {
    type: string,
    id: number,
    name: string,
    description?: string,
    price?: number | null,
    availability?: boolean | null,
}
