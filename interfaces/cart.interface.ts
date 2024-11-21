export interface UserCartsInterface {
    carts: UserCartItem[],
    total_count?: number,
}

export interface UserCartItem {
    id: number,
    guest_id?: string,
    items: CartIdItem[],
    status: string,
    order_id?: number | null,
    created_at: string,
}

export interface CartIdItem {
    quantity: number,
    product_id: number,
}

export interface CartByIdInterface {
    id: number,
    user_id: number | null,
    guest_id: string | null,
    status: string,
    order_id: string | null,
    created_at: string,
    items: CartByIdItem[],
    totals: {
        total_without_vat: number,
        total_vat: number,
        total_with_vat: number,
    },
    items_count: number,
    total_quantity: number,
}

export interface CartByIdItem {
    product_id: number,
    name: string,
    sku: string | null,
    quantity: 1.0,
    price: number,
    total: number,
    vat_rate: number,
    vat_amount: number,
    unit: string,
    availability: boolean,
}
