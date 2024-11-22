export interface OrdersInterface {
    orders: OrderItem[],
    total_count: number,
}

export interface OrderItem {
    id: number,
    cart: OrderCartItem[],
    payment_status: boolean,
    created_at: string | null,
    invoice_id: string | null,
    status: string | null,
    manager_id: string | null,
    amo_data: any,
    orders_data_log: any,
}

export interface OrderCartItem  {
    quantity: number,
    product_id: number,
}
