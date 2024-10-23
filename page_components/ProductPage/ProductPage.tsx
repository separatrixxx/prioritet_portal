import { ProductPageProps } from './ProductPage.props';
import styles from './ProductPage.module.css';
import { Toaster } from 'react-hot-toast';
import { ProductInfo } from '../../components/ProductsComponents/ProductInfo/ProductInfo';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { RelatedProducts } from '../../components/ProductsComponents/RelatedProducts/RelatedProducts';
import { RelatedItem } from '../../interfaces/product.interface';
import { Footer } from '../../components/Common/Footer/Footer';
import { Header } from '../../components/Headers/Header/Header';
import { CommonProductInfo } from '../../components/ProductsComponents/CommonProductInfo/CommonProductInfo';


export const ProductPage = ({ product, commonProduct }: ProductPageProps): JSX.Element => {
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
                <Header />
                {
                    product ?
                        <ProductInfo product={product} />
                    : commonProduct ?
                        <CommonProductInfo product={commonProduct} />
                    : <></>
                }
                {
                    product ?
                        <>
                            <RelatedProducts type='harmful' title={setLocale(router.locale).related_harmful}
                                products={product.result.related_harmful} />
                            <RelatedProducts type='proceed' title={setLocale(router.locale).related_proceed}
                                products={product.result.related_proceed} />
                            <RelatedProducts type='active_ingredient' title={setLocale(router.locale).related_active_ingredient}
                                products={product.result.related_active_ingredient} />
                        </>
                    : <></>
                }
                <Footer />
            </div>
        </>
    );
};
