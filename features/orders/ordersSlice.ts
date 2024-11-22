import { createSlice } from '@reduxjs/toolkit';
import { OrdersInterface } from '../../interfaces/orders.interface';


const ordersData: OrdersInterface = {
    orders: [],
    total_count: -1,
};

export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: ordersData,
    },
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        setOrdersDefault: (state) => {
            state.orders = ordersData

        },
    },
});

export const { setOrders, setOrdersDefault } = orderSlice.actions;

export default orderSlice.reducer;
