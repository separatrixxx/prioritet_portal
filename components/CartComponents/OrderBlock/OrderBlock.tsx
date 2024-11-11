import styles from './OrderBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import { formatPrice, formatText } from '../../../helpers/format.helper';
import { ToastSuccess } from '../../Common/Toast/Toast';


export const OrderBlock = (): JSX.Element => {
    const { router, products, cart } = useSetup();

    const cartIds = new Set(cart.map((c) => c.id));
    const filteredProducts = products.results.filter((product) => cartIds.has(product.id));

    const totalCount = cart.reduce((total, item) => total + item.count, 0);

    const totalPrice = cart.reduce((total, item) => {
        const product = filteredProducts.find(p => p.id === item.id);

        if (product && product.price) {
            return total + product.price * item.count;
        }

        return total;
    }, 0)

    return (
        <div className={styles.orderBlock}>
            <Htag tag='s' className={styles.totalText}>
                {setLocale(router.locale).total}
            </Htag>
            <Htag tag='l' className={styles.orderText}>
                {`${totalCount} ${setLocale(router.locale).format_products[formatText(totalCount)]}`}
                <span>{formatPrice(totalPrice)}</span>
            </Htag>
            <Button text={setLocale(router.locale)[cart.length ? 'buy' : 'catalog']} isPrimary={true} isHeight={true}
                onClick={() => {
                    if (cart.length) {
                        ToastSuccess('Перенаправление на оформление заказа');
                    } else {
                        router.push('/catalog');
                    }
                }} />
        </div>
    );
};
