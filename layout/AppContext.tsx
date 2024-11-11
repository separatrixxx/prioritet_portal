import { createContext, useContext, useEffect } from 'react';
import { setFavorites } from '../features/favorites/favoritesSlice';
import { getFavorites } from '../helpers/favorites.helper';
import { useSetup } from '../hooks/useSetup';
import { setCart } from '../features/cart/cartSlice';
import { getCart } from '../helpers/cart.helper';


const AppContext = createContext<undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { dispatch } = useSetup();

    useEffect(() => {
        dispatch(setFavorites(getFavorites()));
        dispatch(setCart(getCart()));
    }, [dispatch]);

    return <AppContext.Provider value={undefined}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
};
