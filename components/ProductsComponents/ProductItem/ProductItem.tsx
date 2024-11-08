import { ProductItemProps } from './ProductItem.props';
import styles from './ProductItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { ProductPriceBlock } from '../ProductPriceBlock/ProductPriceBlock';
import FavoriteIcon from './favorite.svg';
import { useState } from 'react';
import cn from 'classnames';


export const ProductItem = ({ productId, type, name, description, price, url, isImage, isMain }: ProductItemProps): JSX.Element => {
    const { router, filters, display } = useSetup();

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Link href={`/${type}/${productId}`} className={cn(styles.productItem, {
            [styles.displayLines]: display.display === 'lines' && !isMain,
        })}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
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
                <Htag tag={'m'} className={styles.productName}>
                    {name}
                    <FavoriteIcon className={styles.favoriteButton} onClick={(e: React.MouseEvent<SVGElement>) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }} />
                </Htag>
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
                    <ProductPriceBlock price={price} isMain={isMain} isHovered={isHovered} />
                : <></>
            }
        </Link>
    );
};
