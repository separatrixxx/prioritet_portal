import styles from './MainHeader.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';


export const MainHeader = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.mainHeader}>
            <Link href='/' className={styles.mainHeaderLink} aria-label='main page link'>
                <Htag tag='s'>
                    {setLocale(router.locale).to_main_page}
                </Htag>
            </Link>
        </div>
    );
};
