import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { MainImage } from '../../components/MainComponents/MainImage/MainImage';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { MainProductList } from '../../components/MainComponents/MainProductList/MainProductList';


export const MainPage = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className={styles.wrapper}>
                <Header type='main' />
                <MainImage />
                <Htag tag='xl' className={styles.productTitle}>
                    {setLocale(router.locale).popular_products}
                </Htag>
                <MainProductList />
                <Footer />
            </div>
        </>
    );
};
