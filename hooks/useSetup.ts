import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../features/store/store';


export const useSetup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const categories = useSelector((state: AppState) => state.categories.categories);
    const products = useSelector((state: AppState) => state.products.products);

    return {
        router,
        dispatch,
        categories,
        products,
    };
};
