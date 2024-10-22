import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Search } from '../../SearchComponents/Search/Search';
import { useState } from 'react';
import { MainHeader } from '../MainHeader/MainHeader';
import { ButtonLink } from '../../Buttons/ButtonLink/ButtonLink';


export const Header = (): JSX.Element => {
    const { router } = useSetup();
    const [search, setSearch] = useState<string>('');

    return (
        <header className={styles.header}>
            <MainHeader />
            <div className={styles.headerDiv}>
                <ButtonLink text={setLocale(router.locale).catalog} url='/catalog' />
                <Search text={setLocale(router.locale).search + '...'} value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <ButtonLink text={setLocale(router.locale).profile} url='/profile' />
            </div>
        </header>
    );
};
