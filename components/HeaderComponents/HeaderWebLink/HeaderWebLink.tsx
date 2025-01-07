import { HeaderWebLinkProps } from './HeaderWebLink.props';
import styles from './HeaderWebLink.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Link from 'next/link';
import CatalogIcon from './catalog.svg';
import FavoritesIcon from './favorites.svg';
import ProfileIcon from './profile.svg';
import WarehouseIcon from './warehouse.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const HeaderWebLink = ({ type }: HeaderWebLinkProps): JSX.Element => {
    const { router, favorites, cart } = useSetup();

    return (
        <Link href={type === 'warehouse' ? 'https://prioritet-sklad.ru' : `/${type}`}
            className={styles.headerWebLink} aria-label='header web link'
            target={type === 'warehouse' ? '_blank' : undefined}>
            {
                type === 'catalog' || type === 'cart' ?
                    <CatalogIcon />
                : type === 'favorites' ?
                    <FavoritesIcon />
                : type === 'warehouse' ?
                    <WarehouseIcon />
                : 
                    <ProfileIcon />
            }
            <Htag tag='s' className={styles.linkText}>
                {setLocale(router.locale)[type as 'catalog']}
            </Htag>
            {
                type === 'favorites' && favorites.length || type === 'cart' && cart.items_count > 0 ?
                    <Htag tag='xs' className={styles.totalProducts}>
                        {type === 'favorites' ? favorites.length : cart.items_count}
                    </Htag>
                : <></>
            }
        </Link>
    );
};
