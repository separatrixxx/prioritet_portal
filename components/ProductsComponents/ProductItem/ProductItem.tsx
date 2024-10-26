import { ProductItemProps } from './ProductItem.props';
import styles from './ProductItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import FavoriteIcon from './favorite.svg';
import CartIcon from './cart.svg';
import cn from 'classnames';
import { formatPrice } from '../../../helpers/format.helper';


export const ProductItem = ({ productId, type, name, description, price, url, isImage }: ProductItemProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <Link href={`/${type}/${productId}`} className={styles.productItem}
            aria-label={`${type} link`}>
            {
                isImage ?
                    <Image className={styles.productPhoto} draggable='false'
                        loader={() => url}
                        src={url}
                        alt={name + ' image'}
                        width={1}
                        height={1}
                        unoptimized={true}
                        priority
                    />
                : <></>
            }
            <div className={styles.productNameDiv}>
                <Htag tag='l' className={styles.productName}>
                    {name}
                </Htag>
                <Htag tag='s' className={styles.productCategory}>
                    {setLocale(router.locale).types[type as 'product']}
                </Htag>
            </div>
            <Htag tag='s' className={styles.productDescription}>
                {description}
            </Htag>
            <div className={styles.buttonsDiv} onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <div className={styles.pricePlate}>
                    <Htag tag='m' className={styles.productPrice}>
                        {formatPrice(price || 0)}
                    </Htag>
                </div>
                <div className={cn(styles.buttonPlate, styles.favoriteButton)}>
                    <div />
                    <FavoriteIcon />
                </div>
                <div className={cn(styles.buttonPlate, styles.cartButton)}>
                    <div />
                    <CartIcon />
                </div>
            </div>
        </Link>
    );
};
