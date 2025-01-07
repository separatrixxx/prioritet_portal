export interface ProductsInterface {
    results: ProductItem[],
    total_count: number,
    limit: number,
    offset: number,
}

export interface ProductItem {
    type: string,
    id: number,
    name: string,
    description: string | null,
    price: number | null,
    availability: boolean | null,
    categories: ProductCategoryItem[],
}

export interface ProductCategoryItem {
    id: number,
    name: string,
    category_for: string,
}

export interface ProductById {
    result: {
        id: number,
        name: string,
        product_class: string[] | null,
        description: string | null,
        product_additional_info: any | null,
        categories: ProductCategoryItem[],
        sklad_price: number | null,
        sklad_price_change: {
            [key: string]: {
                new_price: number;
                old_price: number;
                update_id: string;
                update_by_user: number;
                update_timestamp: number;
            };
        },
        sklad_latest_arrivals: {
            data: {
                arrival_date: string,
                batch_number: string,
            },
            latest_update: number,
        },
        availability: boolean,
        sklad_availability: {
            remainder: number,
            measurement: string,
            availability: boolean,
            latest_update: number
        },
        related_harmful: RelatedItem[] | null,
        related_proceed: RelatedItem[] | null,
        related_active_ingredient: RelatedItem[] | null,
        related_products: RelatedProductItem[] | null,
    }
}

export interface CommonProductById {
    result: {
        id: number,
        name: string,
        description: string | null,
        additional_info: any | null,
        categories: ProductCategoryItem[],
    }
}

export interface RelatedItem {
    id: number,
    name: string,
    description: string,
}

export interface RelatedProductItem {
    id: number,
    name: string,
    description: string,
    price: number,
    availability: boolean,
    similarity_score: {
        active_ingredient: number,
        harmful: number,
        proceed: number,
        registrants: number,
    },
    rank: number,
}

export interface ManagerProductInterface {
    id: number,
    name: string,
    category: string,
    sklad_quantity: number,
    price: number,
}

export interface AdditionalInfoInterface {
    name: string,
    url: string,
}
