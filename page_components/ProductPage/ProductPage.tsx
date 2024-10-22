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


export const ProductPage = ({ product, commonProduct }: ProductPageProps): JSX.Element => {
    const { router } = useSetup();

    const related: RelatedItem[] = [
        {
            id: 1,
            name: 'Сопутствующий товар 1',
            description: 'Описание сопутствующего товара 1',
        },
        {
            id: 2,
            name: 'Сопутствующий товар 2',
            description: 'Описание сопутствующего товара 2',
        },
        {
            id: 3,
            name: 'Сопутствующий товар 3',
            description: 'Описание сопутствующего товара 3',
        },
    ];

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
                        <ProductInfo name={product.result.name} description={product.result.description}
                            skladPrice={product.result.sklad_price} />
                    : commonProduct ?
                        <ProductInfo name={commonProduct.result.name} description={commonProduct.result.description} />
                    : <></>
                }
                {
                    product ?
                        <>
                            <RelatedProducts type='harmful' title={setLocale(router.locale).related_harmful}
                                products={related} />
                            <RelatedProducts type='proceed' title={setLocale(router.locale).related_proceed}
                                products={related} />
                            <RelatedProducts type='active_ingredient' title={setLocale(router.locale).related_active_ingredient}
                                products={related} />
                        </>
                    : commonProduct ?
                        <>
                            <RelatedProducts type='product' title={setLocale(router.locale).related_products}
                                products={related} />
                            <RelatedProducts type='harmful' title={setLocale(router.locale).related_harmful}
                                products={related} />
                            <RelatedProducts type='proceed' title={setLocale(router.locale).related_proceed}
                                products={related} />
                            <RelatedProducts type='active_ingredient' title={setLocale(router.locale).related_active_ingredient}
                                products={related} />
                        </>
                    : <></>
                }
                <Footer />
            </div>
        </>
    );
};
