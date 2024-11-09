import { HeaderWebProps } from './HeaderWeb.props';
import styles from './HeaderWeb.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { HeaderWebLink } from '../HeaderWebLink/HeaderWebLink';
import BackIcon from './back.svg';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';
import { Search } from '../../SearchComponents/Search/Search';
import { setLocale } from '../../../helpers/locale.helper';
import { usePreviousUrl } from '../../../hooks/usePreviousUrl';
import cn from 'classnames';


export const HeaderWeb = ({ type }: HeaderWebProps): JSX.Element => {
    const { router } = useSetup();

    const previousUrl = usePreviousUrl();

    return (
        <header className={cn(styles.header, {
            [styles.mainHeader]: type === 'main',
        })}>
            {
                type !== 'main' ?
                    <Link href={type === 'catalog' ? '/' : type === 'favorites' ? '/catalog' : previousUrl}
                        className={styles.backLink}>
                        <BackIcon />
                        <Htag tag='s'>
                            {setLocale(router.locale).go_back}
                        </Htag>
                    </Link>
                : <></>
            }
            <Search isHeader={true} />
            {
                type === 'main' ?
                    <div />
                : <></>
            }
            {
                type === 'main' ?
                    <HeaderWebLink type='catalog' />
                :
                    <>
                        <HeaderWebLink type='favorites' />
                        {
                            type === 'catalog' ?
                                <HeaderWebLink type='cart' />
                            :
                                <HeaderWebLink type='catalog' />
                        }
                    </>
            }
            <HeaderWebLink type='profile' />
        </header>
    );
};
