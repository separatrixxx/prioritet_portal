import styles from './FavoritesPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { MainProductList } from '../../components/MainComponents/MainProductList/MainProductList';


export const FavoritesPage = (): JSX.Element => {
    const { router, favorites } = useSetup();

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
                <Header type='favorites' />
                <Htag tag='xl' className={styles.favoriteTitle}>
                    {`${setLocale(router.locale).favorites} (${favorites.length})`}
                </Htag>
                <MainProductList />
                <Footer />
            </div> */}
        </>
    );
};
