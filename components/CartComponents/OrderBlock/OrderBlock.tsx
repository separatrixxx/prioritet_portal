import styles from './OrderBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import { formatPrice, formatText } from '../../../helpers/format.helper';
import { createOrder } from '../../../helpers/orders.helper';
import { ToastSuccess } from '../../Common/Toast/Toast';


export const OrderBlock = (): JSX.Element => {
    const { router, dispatch, user, cart } = useSetup();

    const total = cart.items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={styles.orderBlock}>
            <Htag tag='s' className={styles.totalText}>
                {setLocale(router.locale).total}
            </Htag>
            <Htag tag='l' className={styles.orderText}>
                {`${total} ${setLocale(router.locale).format_products[formatText(total)]}`}
                <span>{formatPrice(cart.totals.total_with_vat)}</span>
            </Htag>
            {
                user.id ?
                    <Button text={setLocale(router.locale)[cart.items_count ? 'buy' : 'catalog']} isPrimary={true} isHeight={true}
                    onClick={() => {
                        if (cart.items_count) {
                            createOrder({
                                userId: user.id,
                                cartId: cart.id,
                                dispatch: dispatch,
                            }).then(() => ToastSuccess(setLocale(router.locale).order_successfully_created));
                        } else {
                            router.push('/catalog');
                        }
                    }} />
                : 
                    <Htag tag='m' className={styles.loginToOrderText}>
                        {setLocale(router.locale).login_to_profile_to_place_order}
                    </Htag>
            }
        </div>
    );
};
