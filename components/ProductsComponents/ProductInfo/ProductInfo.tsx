import { ProductInfoProps } from './ProductInfo.props';
import styles from './ProductInfo.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { Slider } from '../../Slider/Slider/Slider';
import { Button } from '../../Buttons/Button/Button';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { formatDate, formatPrice, formatTimestamp } from '../../../helpers/format.helper';
import FavoriteIcon from './favorite.svg';
import FavoriteFilledIcon from './favoriteFilled.svg';
import { useState } from 'react';
import cn from 'classnames';


export const ProductInfo = ({ product }: ProductInfoProps): JSX.Element => {
    const { router } = useSetup();

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const images: string[] = ['/logo.svg', '/logo.svg', '/logo.svg'];

    return (
        <div className={styles.productInfo}>
            <div>
                <Slider name={product.result.name} images={images} />
                <div className={styles.infoDiv}>
                    <Htag tag='xl' className={styles.productName}>
                        {product.result.name}
                        {
                            isFavorite ?
                                <FavoriteFilledIcon className={styles.favoriteIcon} 
                                    onClick={toggleFavorite} />
                            :
                                <FavoriteIcon className={styles.favoriteIcon} 
                                    onClick={toggleFavorite} />
                        }
                    </Htag>
                    {
                        product.result.sklad_price_change || product.result.sklad_latest_arrivals ?
                            <div className={styles.updatesInfoDiv}>
                                <Htag tag='s' className={styles.updatesTitle}>
                                    {setLocale(router.locale).latest_arrival_to_stock + ': '}
                                    <span className={styles.updatesText}>
                                        {formatDate(product.result.sklad_latest_arrivals.data.arrival_date)}
                                    </span>
                                </Htag>
                                <Htag tag='s' className={styles.updatesTitle}>
                                    {setLocale(router.locale).latest_price_change + ': '}
                                    <span className={styles.updatesText}>
                                        {formatTimestamp(Object.values(product.result.sklad_price_change)
                                            .sort((a, b) => b.update_timestamp - a.update_timestamp)[0].update_timestamp)}
                                    </span>
                                </Htag>
                            </div>
                        : <></>
                    }
                    {
                        product.result.availability ?
                            <div className={styles.priceDiv}>
                                <Htag tag='l' className={styles.price}>
                                    {formatPrice(product.result.sklad_price || 0)}
                                </Htag>
                                <Button text={setLocale(router.locale).order} onClick={() => { }} />
                            </div>
                            :
                            <Htag tag='m' className={cn(styles.price, styles.outOfStock)}>
                                {setLocale(router.locale).product_out_of_stock}
                            </Htag>
                    }
                </div>
            </div>
            <Htag tag='m' className={styles.productDescription}>
                {product.result.description}
            </Htag>
        </div>
    );
};
