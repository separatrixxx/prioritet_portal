import { ProductItemProps } from './ProductItem.props';
import styles from './ProductItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { ProductPriceBlock } from '../ProductPriceBlock/ProductPriceBlock';
import FavoriteIcon from './favorite.svg';
import FavoriteFilledIcon from './favoriteFilled.svg';
import { useEffect, useState } from 'react';
import { checkFavorite, setFavorite } from '../../../helpers/favorites.helper';
import { toggleFavorite } from '../../../features/favorites/favoritesSlice';
import cn from 'classnames';


export const ProductItem = ({ productId, type, name, description, price, url, isImage, isMain }: ProductItemProps): JSX.Element => {
    const { router, dispatch, filters, display } = useSetup();

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        setIsFavorite(checkFavorite(productId));
    }, [productId]);

    let FavIcon = FavoriteIcon;

    if (!isFavorite) {
        FavIcon = FavoriteIcon;
    } else {
        FavIcon = FavoriteFilledIcon;
    }

    return (
        <Link href={`/${type}/${productId}`} className={cn(styles.productItem, {
            [styles.displayLines]: display.display === 'lines' && !isMain,
        })}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)}
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
                <div>
                    <Htag tag={'m'} className={styles.productName}>
                        {name}
                    </Htag>
                    <FavIcon className={styles.favoriteButton} onClick={(e: any) => {
                        e.stopPropagation();
                        e.preventDefault();
                        dispatch(toggleFavorite(productId));
                        setIsFavorite(!isFavorite);
                        setFavorite(productId);
                    }} />
                </div>
                {
                    display.display !== 'lines' ?
                        <Htag tag='s' className={styles.productCategory}>
                            {setLocale(router.locale).types[type as 'product']}
                        </Htag>
                    : <></>
                }
            </div>
            {
                display.display !== 'lines' ?
                    <Htag tag='s' className={styles.productDescription}>
                        {description || setLocale(router.locale).description}
                    </Htag>
                : <></>
            }
            {
                filters.start.class === 'product' ?
                    <ProductPriceBlock productId={productId} price={price} isMain={isMain} isHovered={isHovered} />
                : <></>
            }
        </Link>
    );
};
