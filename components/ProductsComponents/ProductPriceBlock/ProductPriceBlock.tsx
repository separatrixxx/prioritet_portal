import { ProductPriceBlockProps } from './ProductPriceBlock.props';
import styles from './ProductPriceBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import FavoriteIcon from './favorite.svg';
import BuyIcon from './buy.svg';
import { formatPrice } from '../../../helpers/format.helper';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { checkFavorite, setFavorite } from '../../../helpers/favorites.helper';
import { useState } from 'react';
import cn from 'classnames';
import { toggleFavorite } from '../../../features/favorites/favoritesSlice';


export const ProductPriceBlock = ({ productId, price, isMain, isHovered }: ProductPriceBlockProps): JSX.Element => {
    const { router, dispatch, display } = useSetup();

    const [isFavorite, setIsFavorite] = useState<boolean>(checkFavorite(productId));

    return (
        <div className={cn(styles.productPriceBlock, {
            [styles.productPriceLines]: display.display === 'lines' && !isMain,
        })} onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
        }}>
            <Htag tag='l' className={cn(styles.productPrice, {
                [styles.hoveredPrice]: isHovered,
            })}>
                {formatPrice(price || 0)}
            </Htag>
            <button className={cn(styles.productButton, {
                [styles.hoveredButton]: isHovered,
                [styles.activeButton]: isFavorite,
                [styles.hoveredActiveButton]: isFavorite && isHovered,
            })} onClick={() => {
                dispatch(toggleFavorite(productId));
                setIsFavorite(!isFavorite);
                setFavorite(productId);
            }}>
                <div />
                <FavoriteIcon />
            </button>
            <button className={cn(styles.productButton, {
                [styles.hoveredButton]: isHovered,
            })}>
                <div />
                <BuyIcon />
            </button>
            <button className={styles.productMobButton}>
                <div />
                <BuyIcon />
                <Htag tag='m' className={styles.buyText}>
                    {setLocale(router.locale).buy}
                </Htag>
            </button>
        </div>
    );
};
