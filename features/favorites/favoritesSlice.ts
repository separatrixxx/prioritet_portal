import { createSlice } from '@reduxjs/toolkit';
import { FaforitesIdsInterface } from '../../interfaces/favorites.interface';


const favoritesData: FaforitesIdsInterface = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: favoritesData,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = action.payload
        },
        toggleFavorite: (state, action) => {
            const productId = action.payload;
            const index = state.favorites.indexOf(productId);

            if (index !== -1) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(productId);
            }
        },
    },
});

export const { setFavorites, toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
