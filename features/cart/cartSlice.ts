import { createSlice } from '@reduxjs/toolkit';
import { CartByIdInterface } from '../../interfaces/cart.interface';


const cartData: CartByIdInterface = {
    id: 0,
    user_id: null,
    guest_id: null,
    status: '',
    order_id: null,
    created_at: '',
    items: [],
    totals: {
        total_without_vat: 0,
        total_vat: 0,
        total_with_vat: 0,
    },
    items_count: -1,
    total_quantity: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: cartData,
      },
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setCartDefault: (state) => {
            state.cart = cartData;
        },
    }
});

export const { setCart, setCartDefault } = cartSlice.actions;

export default cartSlice.reducer;
