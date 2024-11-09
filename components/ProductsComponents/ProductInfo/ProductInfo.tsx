import { ProductInfoProps } from './ProductInfo.props';
import styles from './ProductInfo.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { Slider } from '../../Slider/Slider/Slider';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';
import { formatPrice } from '../../../helpers/format.helper';
import { ProductBuyBlock } from '../ProductBuyBlock/ProductBuyBlock';


export const ProductInfo = ({ product, commonProduct }: ProductInfoProps): JSX.Element => {
    const { router } = useSetup();

    const images: string[] = ['/logo.svg', '/logo.svg', '/logo.svg'];

    return (
        <div className={styles.productInfo}>
            <div>
                <div className={styles.mainInfoDiv}>
                    <Slider name={product?.result.name || setLocale(router.locale).name} images={images} />
                    <div>
                        <div className={styles.productNameDiv}>
                            <Htag tag='xxl' className={styles.productName}>
                                {product?.result.name || commonProduct?.result.name}
                                {
                                    product ?
                                        <span>
                                            {formatPrice(product?.result.sklad_price || 0)}
                                        </span>
                                    : <></>
                                }
                            </Htag>
                            {
                                product ?
                                    <Htag tag='m' className={styles.productCategory}>
                                        {product.result.product_category || setLocale(router.locale).category}
                                    </Htag>
                                : <></>
                            }
                        </div>
                        {
                            product ?
                                <>
                                    <Htag tag='xxl' className={styles.productPrice}>
                                        {formatPrice(product?.result.sklad_price || 0)}
                                    </Htag>
                                    <ProductBuyBlock productId={product.result.id} />
                                </>
                            : <></>
                        }
                    </div>
                </div>
                <Htag tag='m' className={styles.productDescription}>
                    {product?.result.description || setLocale(router.locale).description}
                </Htag>
            </div>
            {
                product ?
                    <AdditionalInfo product={product} />
                : <></>
            }
        </div>
    );
};
