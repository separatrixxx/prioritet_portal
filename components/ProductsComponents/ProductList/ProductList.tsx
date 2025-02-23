import styles from './ProductList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ProductItem } from '../ProductItem/ProductItem';
import { Spinner } from '../../Common/Spinner/Spinner';
import cn from 'classnames';
import { PaginationBar } from '../../PaginationComponents/PaginationBar/PaginationBar';


export const ProductList = (): JSX.Element => {
    const { products, display } = useSetup();

    return (
        <>
            {
                products.total_count > -1 ?
                    <>
                        <div className={cn(styles.productList, {
                            [styles.displayGrid]: display.display === 'grid',
                            [styles.displayLines]: display.display === 'lines',
                        })}>
                            {products.results.map(p =>
                                <ProductItem key={p.id} productId={p.id} type={p.type} name={p.name}
                                    description={p.description} price={p.price} url='/logo.svg'
                                    isImage={false} category={p.categories[0] && p.categories[0].name} />
                            )}
                        </div>
                        <PaginationBar />
                    </>
                :
                    <div className={styles.spinnerDiv}>
                        <Spinner />
                    </div>
            }
        </>
    );
};
