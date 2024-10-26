import styles from './ProductList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { ProductItem } from '../ProductItem/ProductItem';


export const ProductList = (): JSX.Element => {
    const { router, products } = useSetup();

    return (
        <>
            <Htag tag='xl' className={styles.productListTitle}>
                {setLocale(router.locale).popular_products + ':'}
            </Htag>
            <div className={styles.productList}>
                {products.results.map(p => 
                    <ProductItem key={p.id} productId={p.id} type={p.type} name={p.name}
                        description={p.description} price={p.price} url='/logo.svg' isImage={false} />
                )}
            </div>
        </>
    );
};
