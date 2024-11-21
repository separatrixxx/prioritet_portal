import styles from './CartList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { CartItem } from '../CartItem/CartItem';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const CartList = (): JSX.Element => {
    const { router, cart } = useSetup();

    return (
        <>
            {
                cart.items_count && cart.items_count === 0 ?
                    <Htag tag='m' className={styles.emptyText}>
                        {setLocale(router.locale).cart_is_empty}
                    </Htag>
                : !cart.items_count || cart.items_count > 0 ?
                    <div className={styles.cartList}>
                        {cart.items.map(c =>
                            <CartItem key={c.product_id} productId={c.product_id} name={c.name} price={c.price}
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
