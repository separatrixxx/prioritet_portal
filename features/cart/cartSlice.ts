import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartIdsInterface } from '../../interfaces/cart.interface';


const cartData: CartIdsInterface = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartData,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        toggleCart: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            const index = state.cart.findIndex(item => item.id === productId);

            if (index !== -1) {
                state.cart.splice(index, 1);
            } else {
                state.cart.push({ id: productId, count: 1 });
            }
        },
        removeCart: (state, action) => {
            const productId = action.payload;

            state.cart = state.cart.filter(item => item.id !== productId);
        },
        plusCart: (state, action) => {
            const productId = action.payload;
            const product = state.cart.find(item => item.id === productId);
            
            if (product) {
                product.count += 1;
            }
        },
        minusCart: (state, action) => {
            const productId = action.payload;
            const productIndex = state.cart.findIndex(item => item.id === productId);

            if (productIndex !== -1) {
                const product = state.cart[productIndex];
    
                product.count -= 1;
            }
        },
    },
});

export const { setCart, toggleCart, removeCart, plusCart, minusCart } = cartSlice.actions;

export default cartSlice.reducer;
