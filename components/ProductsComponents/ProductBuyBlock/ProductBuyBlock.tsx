import { ProductBuyBlockProps } from './ProductBuyBlock.props';
import styles from './ProductBuyBlock.module.css';
import FavoriteIcon from './favorite.svg';
import { Button } from '../../Buttons/Button/Button';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';
import { checkFavorite, setFavorite } from '../../../helpers/favorites.helper';
import cn from 'classnames';
import { toggleFavorite } from '../../../features/favorites/favoritesSlice';


export const ProductBuyBlock = ({ productId }: ProductBuyBlockProps): JSX.Element => {
    const { router, dispatch } = useSetup();

    const [isFavorite, setIsFavorite] = useState<boolean>(checkFavorite(productId));

    return (
        <div className={styles.productBuyBlock}>
            <Button text={setLocale(router.locale).buy} onClick={() => {}} isPrimary={true} />
            <button className={cn(styles.favoriteButton, {
                [styles.activeButton]: isFavorite,
            })} onClick={() => {
                dispatch(toggleFavorite(productId));
                setIsFavorite(!isFavorite);
                setFavorite(productId);
            }}>
                <div />
                <FavoriteIcon />
            </button>
        </div>
    );
};
