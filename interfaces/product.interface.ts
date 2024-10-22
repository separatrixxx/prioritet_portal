export interface ProductsInterface {
    results: ProductItem[],
    total_count: number,
    limit: number,
    offset: number,
}

export interface ProductsForCategoriesInterface {
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

export interface ProductById {
    result: {
        id: number,
        name: string,
        product_category: number[],
        product_class: string[],
        active_ingredient: number[],
        description: string,
        harmful: number[],
        proceed: number[],
        sklad_price: number,
        sklad_price_change: any,
        sklad_latest_arrivals: any,
        sklad_availability: any,
        related_harmful: RelatedItem[],
        related_proceed: RelatedItem[],
        related_active_ingredient: RelatedItem[],
    }
}

export interface CommonProductById {
    result: {
        id: number,
        name: string,
        description: string,
        product: number[],
        additional_info: any,
        related_products: RelatedItem[],
        related_harmful: RelatedItem[],
        related_proceed: RelatedItem[],
        related_active_ingredient: RelatedItem[],
    }
}

export interface RelatedItem {
    id: number,
    name: string,
    description: string,
}

export interface ManagerProductInterface {
    id: number,
    name: string,
    category: string,
    sklad_quantity: number,
    price: number,   
}
