import styles from './CartList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { CartItem } from '../CartItem/CartItem';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const CartList = (): JSX.Element => {
    const { router, products, cart } = useSetup();

    const cartIds = new Set(cart.map((c) => c.id));
    const filteredProducts = products.results.filter((product) => cartIds.has(product.id));

    return (
        <>
            {
                cart.length === 0 ?
                    <Htag tag='m' className={styles.emptyText}>
                        {setLocale(router.locale).cart_is_empty}
                    </Htag>
                : products.total_count > 0 ?
                    <div className={styles.cartList}>
                        {filteredProducts.map(p =>
                            <CartItem key={p.id} productId={p.id} name={p.name} price={p.price}
                                url={'/logo.svg'} />
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
