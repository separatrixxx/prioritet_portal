import { CatalogItemProps } from './CatalogItem.props';
import styles from './CatalogItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { formatPrice } from '../../../helpers/format.helper';


export const CatalogItem = ({ productId, url, name, type, description, price, availability }: CatalogItemProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.catalogItem}>
            <Link href={`/${type}/${productId}`} className={styles.photoDiv} aria-label={`${type} image link`}>
                <Image className={styles.catalogItemPhoto} draggable='false'
                    loader={() => url}
                    src={url}
                    alt={name + ' image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority
                />
            </Link>
            <div className={styles.catalogItemInfoDiv}>
                <Link href={`/${type}/${productId}`} aria-label={`${type} name link`}>
                    <Htag tag='m' className={styles.name}>
                        {name}
                    </Htag>
                </Link>
                {
                    type ?
                        <Htag tag='s' className={styles.type}>
                            {setLocale(router.locale).types[type as 'product']}
                        </Htag>
                    : <></>
                }
                {
                    description ?
                        <Htag tag='s' className={styles.description}>
                            {description}
                        </Htag>
                        : <></>
                }
                {
                    price ?
                        <div className={styles.priceDiv}>
                            <Htag tag='m' className={styles.price}>
                                {formatPrice(price) + ' ₽'}
                            </Htag>
                            <Button text={setLocale(router.locale).order} onClick={() => { }} />
                        </div>
                    : <></>
                }
            </div>
        </div>
    );
};
