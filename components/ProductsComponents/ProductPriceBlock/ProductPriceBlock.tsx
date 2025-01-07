import { ProductPriceBlockProps } from './ProductPriceBlock.props';
import styles from './ProductPriceBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import BuyIcon from './buy.svg';
import { formatPrice } from '../../../helpers/format.helper';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { checkFavorite, setFavorite } from '../../../helpers/favorites.helper';
import { useEffect, useState } from 'react';
import { toggleFavorite } from '../../../features/favorites/favoritesSlice';
import { ProductButton } from '../../Buttons/ProductButton/ProductButton';
import { CartByIdItem } from '../../../interfaces/cart.interface';
import { addCart } from '../../../helpers/cart.helper';
import cn from 'classnames';


export const ProductPriceBlock = ({ productId, price, isMain, isHovered }: ProductPriceBlockProps): JSX.Element => {
    const { router, dispatch, display, cart } = useSetup();

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [isCart, setIsCart] = useState<boolean>(false);

    useEffect(() => {
        setIsFavorite(checkFavorite(productId));
        setIsCart(cart.items.some((item: CartByIdItem) => item.product_id === productId));
    }, [cart, productId]);

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
            <ProductButton className={styles.productButton} type='favorite' flag={isFavorite}
                isHovered={isHovered} onClick={() => {
                    dispatch(toggleFavorite(productId));
                    setIsFavorite(!isFavorite);
                    setFavorite(productId);
                }} />
            <ProductButton className={styles.productButton} type='buy' flag={isCart}
                isHovered={isHovered} onClick={() => {
                    if (!isCart) {
                        addCart({
                            productId: productId,
                            cart: cart,
                            dispatch: dispatch,
                        });
                    } else {
                        router.push('/cart');
                    }
                }} />
            <button className={cn(styles.productMobButton, {
                [styles.cartMobButton]: isCart,
            })} onClick={() => {
                    if (!isCart) {
                        addCart({
                            productId: productId,
                            cart: cart,
                            dispatch: dispatch,
                        });
                    } else {
                        router.push('/cart');
                    }
                }}>
                <div />
                <BuyIcon />
                <Htag tag='m' className={styles.buyText}>
                    {setLocale(router.locale)[!isCart ? 'buy' : 'in_cart']}
                </Htag>
            </button>
        </div>
    );
};
