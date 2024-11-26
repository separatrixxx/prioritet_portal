import { CartByIdInterface } from "./cart.interface";


export interface OrdersInterface {
    orders: OrderItem[],
    total_count: number,
}

export interface OrderItem {
    id: number,
    cart: OrderCartInterface,
    payment_status: boolean,
    created_at: string | null,
    invoice_id: string | null,
    status: string | null,
    manager_id: string | null,
    amo_data: any,
    orders_data_log: any,
}

export interface OrderCartInterface  {
    items: OrderCartItem[],
    totals: {
        total_without_vat: number,
        total_vat: number,
        total_with_vat: number,
    },
    items_count: number,
    total_quantity: number,
}

export interface OrderCartItem {
    product_id: number,
    name: string,
    quantity: number,
}
