import styles from './MainProductList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { ProductItem } from '../../ProductsComponents/ProductItem/ProductItem';


export const MainProductList = (): JSX.Element => {
    const { products } = useSetup();

    console.log(products)

    return (
        <>
            {
                products.total_count > -1 ?
                    <div className={styles.productList}>
                        {products.results.map(p => 
                            <ProductItem key={p.id} productId={p.id} type={p.type} name={p.name}
                                description={p.description} price={p.price} url='/logo.svg'
                                isImage={false} isMain={true} />
                        )}
                    </div>
                :
                        <div className={styles.spinnerDiv}>
                            <Spinner />
                        </div>
            }
        </>
    );
};
