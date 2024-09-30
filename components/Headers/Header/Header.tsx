import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';


export const Header = (): JSX.Element => {
    const { router } = useSetup();
    
    return (
        <header className={styles.header}>
            <Button text={setLocale(router.locale).catalog} onClick={() => router.push('/catalog')} />
        </header>
    );
};
