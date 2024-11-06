import { HeaderMobLinkProps } from './HeaderMobLink.props';
import styles from './HeaderMobLink.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Link from 'next/link';
import ArrowIcon from './arrow.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const HeaderMobLink = ({ link, isFirst, onClick }: HeaderMobLinkProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <Link href={`/${link === 'main' ? '/' : link}`} className={cn(styles.headerMobLink, {
            [styles.firstLink]: isFirst,
        })} onClick={onClick} aria-label='header mobile link'>
            <Htag tag='xxl' className={styles.linkText}>
                {setLocale(router.locale)[link as 'main']}
            </Htag>
            <ArrowIcon />
        </Link>
    );
};
