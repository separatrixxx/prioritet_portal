import styles from './HeaderCatalog.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Common/Input/Input';
import { useState } from 'react';
import { ToastSuccess } from '../../Common/Toast/Toast';


export const HeaderCatalog = (): JSX.Element => {
    const { router } = useSetup();
    const [search, setSearch] = useState<string>('');

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && search.trim() !== '') {
            ToastSuccess(search);
        }
    };
    
    return (
        <header className={styles.headerCatalog}>
            <Input text={setLocale(router.locale).search + '...'} value={search}
                onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress} />
        </header>
    );
};
