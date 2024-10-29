import { ProductListProps } from './ProductList.props';
import styles from './ProductList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ProductItem } from '../ProductItem/ProductItem';
import { Spinner } from '../../Common/Spinner/Spinner';
import cn from 'classnames';


export const ProductList = ({ isMain }: ProductListProps): JSX.Element => {
    const { products, filters } = useSetup();

    return (
        <>
            {
                products.total_count > -1 ?
                    <div className={cn(styles.productList, {
                        [styles.displayMain]: isMain,
                        [styles.displayGrid]: filters.display === 'grid' && !isMain,
                        [styles.displayLines]: filters.display === 'lines' && !isMain,
                    })}>
                        {products.results.map(p => 
                            <ProductItem key={p.id} productId={p.id} type={p.type} name={p.name}
                                description={p.description} price={p.price} url='/logo.svg'
                                isImage={false} isMain={isMain} />
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
