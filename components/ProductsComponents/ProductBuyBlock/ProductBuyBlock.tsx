import { ProductBuyBlockProps } from './ProductBuyBlock.props';
import styles from './ProductBuyBlock.module.css';
import { Button } from '../../Buttons/Button/Button';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useState } from 'react';
import { checkFavorite, setFavorite } from '../../../helpers/favorites.helper';
import { toggleFavorite } from '../../../features/favorites/favoritesSlice';
import { checkCart, setLocalCart } from '../../../helpers/cart.helper';
import { toggleCart } from '../../../features/cart/cartSlice';
import { CartController } from '../CartController/CartController';
import { ProductButton } from '../../Buttons/ProductButton/ProductButton';
import cn from 'classnames';


export const ProductBuyBlock = ({ productId }: ProductBuyBlockProps): JSX.Element => {
    const { router, dispatch } = useSetup();

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [isCart, setIsCart] = useState<boolean>(false);
    
    useEffect(() => {
        setIsFavorite(checkFavorite(productId));
        setIsCart(checkCart(productId));
    }, [productId]);

    return (
        <div className={cn(styles.productBuyBlock, {
            [styles.cartBlock]: isCart,
        })}>
            <Button text={setLocale(router.locale)[!isCart ? 'buy' : 'in_cart']}
                className={styles.buyButton} onClick={() => {
                    if (!isCart) {
                        dispatch(toggleCart(productId));
                        setIsCart(true);
                        setLocalCart(productId);
                    } else {
                        router.push('/cart');
                    }
                }} isPrimary={!isCart} />
            {
                isCart ?
                    <CartController productId={productId} setIsCart={setIsCart} />
                : <></>
            }
            <ProductButton className={styles.favoriteButton} type='favorite' flag={isFavorite} size='l'
                onClick={() => {
                    dispatch(toggleFavorite(productId));
                    setIsFavorite(!isFavorite);
                    setFavorite(productId);
                }} />
        </div>
    );
};
