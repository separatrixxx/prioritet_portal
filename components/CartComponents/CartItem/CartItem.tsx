import { CartItemProps } from './CartItem.props';
import styles from './CartItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { formatPrice } from '../../../helpers/format.helper';
import { CartController } from '../../ProductsComponents/CartController/CartController';
import { ProductButton } from '../../Buttons/ProductButton/ProductButton';
import { useEffect, useState } from 'react';
import { checkFavorite, setFavorite } from '../../../helpers/favorites.helper';
import { toggleFavorite } from '../../../features/favorites/favoritesSlice';
import { removeCart } from '../../../helpers/cart.helper';
import cn from 'classnames';


export const CartItem = ({ productId, name, url, price }: CartItemProps): JSX.Element => {
    const { dispatch, cart } = useSetup();

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        setIsFavorite(checkFavorite(productId));
    }, [productId]);

    return (
        <Link href={`/product/${productId}`} className={styles.cartItem}
            aria-label={'cart link'}>
            <Image className={styles.productPhoto} draggable='false'
                loader={() => url}
                src={url}
                alt={name + ' image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
            <div className={styles.cartInfoDiv}>
                <Htag tag='l' className={styles.cartText}>
                    {name}
                </Htag>
                <div className={styles.cartPriceDiv}>
                    <CartController productId={productId} isCart={true} />
                    <ProductButton className={styles.favoriteButton} type='favorite' flag={isFavorite} onClick={() => {
                            dispatch(toggleFavorite(productId));
                            setIsFavorite(!isFavorite);
                            setFavorite(productId);
                        }} />
                    <ProductButton className={styles.removeButton} type='remove' onClick={() => 
                        removeCart({
                            productId: productId,
                            cart: cart,
                            dispatch: dispatch,
                        })} />
                    <Htag tag='l' className={cn(styles.cartText, styles.productPrice)}>
                        {formatPrice(price || 0)}
                    </Htag>
                </div>
            </div>
        </Link>
    );
};
