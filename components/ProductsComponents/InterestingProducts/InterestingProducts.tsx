import styles from './InterestingProducts.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ProductItem } from '../ProductItem/ProductItem';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Spinner } from '../../Common/Spinner/Spinner';


export const InterestingProducts = (): JSX.Element => {
    const { router, products, user } = useSetup();

    if (!user.id) {
        return (
            <></>
        );
    }

    return (
        <>
            {
                products.total_count > -1 ?
                    <div className={styles.interestingProductsDiv}>
                        <Htag tag='l'>
                            {setLocale(router.locale).you_might_be_interested}
                        </Htag>
                        <div className={styles.interestingProducts}>
                            {products.results.slice(0, 4).map(p =>
                                <ProductItem key={p.id} productId={p.id} type={p.type} name={p.name}
                                    description={p.description} price={p.price} url='/logo.svg'
                                    isImage={true} />
                            )}
                        </div>
                    </div>
                :
                    <div className={styles.spinnerDiv}>
                        <Spinner />
                    </div>
            }
        </>
    );
};
