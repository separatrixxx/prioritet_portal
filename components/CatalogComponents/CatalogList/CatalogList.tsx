import styles from './CatalogList.module.css';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { getProducts } from '../../../helpers/products.helper';
import { setProductsDefault } from '../../../features/products/productsSlice';
import { FiltersInterface } from '../../../interfaces/filters.interface';


export const CatalogList = (): JSX.Element => {
    const { router, dispatch, products, filters } = useSetup();
    
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(20);
    const [loading, setLoading] = useState<boolean>(false);

    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    const loadProducts = (resetPage: boolean, currentFilters: FiltersInterface) => {
        if (loading) return;
        
        setLoading(true);
    
        const offset = resetPage ? 0 : page * limit;
        const itemsToLoad = limit;
    
        getProducts({
            type: products.activeType,
            dispatch: dispatch,
            limit: itemsToLoad,
            offset: offset,
            filters: currentFilters,
        }).finally(() => {
            setLoading(false);
    
            if (resetPage) {
                setPage(1);
            } else {
                setPage(prevPage => prevPage + 1);
            }
        });
    };

    useEffect(() => {
        if (inView) {
            loadProducts(false, filters);
        }
    }, [inView]);

    useEffect(() => {
        dispatch(setProductsDefault());
        setPage(1);
        loadProducts(true, filters);
    }, [filters]);

    return (
        <div className={styles.catalogList}>
            <Htag tag='s' className={styles.productsFound}>
                {setLocale(router.locale).products_found.replace('$$$', String(products.total_count === -1 ? 0 : products.total_count))}
            </Htag>
            {
                products.total_count > -1 ?
                    <>
                        {products.results.map(p => (
                            <CatalogItem key={p.id} productId={p.id} url={'/logo.svg'} name={p.name}
                                type={p.type} description={p.description} price={p.price} availability={p.availability} />
                        ))}
                        {
                            products.results.length < products.total_count ?
                                <div ref={ref} />
                            : <></>
                        }
                    </>
                : <Spinner />
            }
        </div>
    );
};
