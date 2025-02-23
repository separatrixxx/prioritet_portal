import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../features/store/store';


export const useSetup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const classes = useSelector((state: AppState) => state.classes.classes);
    const categories = useSelector((state: AppState) => state.categories.categories);
    const products = useSelector((state: AppState) => state.products.products);
    const filters = useSelector((state: AppState) => state.filters.filters);
    const display = useSelector((state: AppState) => state.display.display);
    const favorites = useSelector((state: AppState) => state.favorites.favorites);
    const cart = useSelector((state: AppState) => state.cart.cart);
    const user = useSelector((state: AppState) => state.user.user);
    const orders = useSelector((state: AppState) => state.orders.orders);

    return {
        router,
        dispatch,
        classes,
        categories,
        products,
        filters,
        display,
        favorites,
        cart,
        user,
        orders,
    };
};
