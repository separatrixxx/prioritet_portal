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
    description: string | null,
    price: number | null,
    availability: boolean | null,
}

export interface ProductById {
    result: {
        id: number,
        name: string,
        product_category: number[] | null,
        product_class: string[] | null,
        description: string | null,
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
    }
}

export interface CommonProductById {
    result: {
        id: number,
        name: string,
        description: string | null,
        additional_info: any | null,
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

export interface AdditionalInfoInterface {
    name: string,
    url: string,
}
