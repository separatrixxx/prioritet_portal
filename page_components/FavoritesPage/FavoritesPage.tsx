import styles from './FavoritesPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { Header } from '../../components/HeaderComponents/Header/Header';


export const FavoritesPage = (): JSX.Element => {
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
                <Header type='other' />
                <div />
                <Footer />
            </div>
        </>
    );
};
