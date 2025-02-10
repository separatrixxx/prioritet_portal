import styles from './CartPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { Htag } from '../../components/Common/Htag/Htag';
import { useSetup } from '../../hooks/useSetup';
import { setLocale } from '../../helpers/locale.helper';
import { CartList } from '../../components/CartComponents/CartList/CartList';
import { OrderBlock } from '../../components/CartComponents/OrderBlock/OrderBlock';


export const CartPage = (): JSX.Element => {
    const { router, cart } = useSetup();

    return (
        <>
            {/* <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className={styles.wrapper}>
                <Header type='other' />
                <Htag tag='xl' className={styles.cartTitle}>
                    {`${setLocale(router.locale).cart} (${cart.items_count > 0 ? cart.items_count : 0})`}
                </Htag>
                <div className={styles.cartDiv}>
                    <CartList />
                    <OrderBlock />
                </div>
                <Footer />
            </div> */}
        </>
    );
};
