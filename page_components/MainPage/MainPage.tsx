import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { MainImage } from '../../components/MainComponents/MainImage/MainImage';
import { Header } from '../../components/Headers/Header/Header';
import { ProductList } from '../../components/ProductsComponents/ProductList/ProductList';


export const MainPage = (): JSX.Element => {
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
                <Header />
                <MainImage />
                <ProductList />
                <Footer />
            </div>
        </>
    );
};
