import { createContext, useContext, useEffect } from 'react';
import { setFavorites } from '../features/favorites/favoritesSlice';
import { getFavorites } from '../helpers/favorites.helper';
import { useSetup } from '../hooks/useSetup';
import { getUser } from '../helpers/user.helper';
import { getGuestId } from '../helpers/guest.helper';
import { AuthDataInterface } from '../interfaces/auth.interface';
import { getUserCart } from '../helpers/cart.helper';


const AppContext = createContext<undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { dispatch } = useSetup();

    useEffect(() => {
        const localAuthData = localStorage.getItem('authData');
        
        dispatch(setFavorites(getFavorites()));

        if (localAuthData) {
            const authData: AuthDataInterface = JSON.parse(localAuthData);

            getUser({
                userId: authData.userId,
                accessToken: authData.accessToken,
                dispatch: dispatch,
            });

            getUserCart({
                userId: authData.userId,
                accessToken: authData.accessToken,
                dispatch: dispatch,
            });
        } else {
            getGuestId({
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
