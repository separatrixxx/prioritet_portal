import { ProductPageProps } from './ProductPage.props';
import styles from './ProductPage.module.css';
import { Toaster } from 'react-hot-toast';
import { ProductInfo } from '../../components/ProductsComponents/ProductInfo/ProductInfo';
import { Footer } from '../../components/Common/Footer/Footer';
import { Header } from '../../components/HeaderComponents/Header/Header';


export const ProductPage = ({ product, commonProduct }: ProductPageProps): JSX.Element => {
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
                <Header type='product' />
                <ProductInfo product={product} commonProduct={commonProduct} />
                <Footer />
            </div> */}
        </>
    );
};
