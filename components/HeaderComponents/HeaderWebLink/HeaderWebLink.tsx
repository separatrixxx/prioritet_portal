import { HeaderWebLinkProps } from './HeaderWebLink.props';
import styles from './HeaderWebLink.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Link from 'next/link';
import CatalogIcon from './catalog.svg';
import FavoritesIcon from './favorites.svg';
import ProfileIcon from './profile.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { getFavorites } from '../../../helpers/favorites.helper';


export const HeaderWebLink = ({ type }: HeaderWebLinkProps): JSX.Element => {
    const { router, favorites } = useSetup();

    const totalFavorites = getFavorites().length;
    const totalCart = 0;

    return (
        <Link href={`/${type}`} className={styles.headerWebLink}
            aria-label='header web link'>
            {
                type === 'catalog' || type === 'cart' ?
                    <CatalogIcon />
                : type === 'favorites' ?
                    <FavoritesIcon />
                :
                    <ProfileIcon />
            }
            <Htag tag='s' className={styles.linkText}>
                {setLocale(router.locale)[type as 'catalog']}
            </Htag>
            {
                type === 'favorites' && favorites.length ?
                    <Htag tag='xs' className={styles.totalProducts}>
                        {type === 'favorites' ? favorites.length : ''}
                    </Htag>
                : <></>
            }
        </Link>
    );
};
