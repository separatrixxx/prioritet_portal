import styles from './CatalogList.module.css';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { getProducts } from '../../../helpers/products.helper';


export const CatalogList = (): JSX.Element => {
    const { router, dispatch, products } = useSetup();
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(20);
    const [loading, setLoading] = useState<boolean>(false);

    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView && !loading && products.results.length < products.total_count) {
            setLoading(true);

            const remainingItems = products.total_count - products.results.length;
            const itemsToLoad = Math.min(limit, remainingItems);

            getProducts({
                type: products.activeType,
                dispatch: dispatch,
                limit: itemsToLoad,
                offset: page * limit,
            }).finally(() => {
                setLoading(false);
                setPage(prevPage => prevPage + 1);
            });
        }
    }, [inView, loading, products.results.length, products.total_count, products.activeType, page, limit, dispatch]);

    console.log(products.results.length);

    return (
        <div className={styles.catalogList}>
            {products.results.length > 0 ?
                <>
                    <Htag tag='s' className={styles.productsFound}>
                        {setLocale(router.locale).products_found.replace('$$$', String(products.total_count))}
                    </Htag>
                    {products.results.map((p, i) => (
                        <CatalogItem key={p.id + i} url={'/logo.svg'} name={p.name} type={p.type} description={p.description}
                            price={p.price} availability={p.availability} />
                    ))}
                    {
                        products.results.length < products.total_count ?
                            <div ref={ref} />
                        : <></>
                    }
                </>
            :
                <Spinner />
            }
        </div>
    );
};
