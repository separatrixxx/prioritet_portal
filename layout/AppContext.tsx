import { createContext, useContext, useEffect } from 'react';
import { setFavorites } from '../features/favorites/favoritesSlice';
import { getFavorites } from '../helpers/favorites.helper';
import { useSetup } from '../hooks/useSetup';
import { setCart } from '../features/cart/cartSlice';
import { getCart } from '../helpers/cart.helper';
import { getUser, refreshUserToken } from '../helpers/user.helper';


const AppContext = createContext<undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { dispatch } = useSetup();

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');
        
        dispatch(setFavorites(getFavorites()));
        dispatch(setCart(getCart()));

        if (accessToken && refreshToken) {
            getUser(accessToken, {
                dispatch: dispatch,
            });
        }
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
