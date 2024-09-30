import { CatalogItemProps } from './CatalogItem.props';
import styles from './CatalogItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';


export const CatalogItem = ({ url, name, type, description, price }: CatalogItemProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.catalogItem}>
            <Link href={'/catalog/' + name} className={styles.photoDiv}>
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
                <Link href={'/catalog/' + name}>
                    <Htag tag='m' className={styles.name}>
                        {name}
                    </Htag>
                </Link>
                {
                    type ?
                        <Htag tag='s' className={styles.type}>
                            {type}
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
                                {price + ' ₽'}
                            </Htag>
                            <Button text={setLocale(router.locale).order} onClick={() => { }} />
                        </div>
                        : <></>
                }
            </div>
        </div>
    );
};
