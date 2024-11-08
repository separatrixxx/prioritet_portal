import styles from './FiltersBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';
import { setFiltersName } from '../../../features/filters/filtersSlice';
import { SortFilter } from '../SortFilter/SortFilter';
import { DisplayFilter } from '../DisplayFilter/DisplayFilter';


export const FiltersBar = (): JSX.Element => {
    const { router, dispatch } = useSetup();

    const [name, setName] = useState<string>('');
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const newTimeout = setTimeout(() => {
            dispatch(setFiltersName(e.target.value));
        }, 200);

        setDebounceTimeout(newTimeout);
    };

    return (
        <div className={styles.filtersBar}>
            <input className={styles.filtersName}
                placeholder={setLocale(router.locale).name}
                value={name}
                onChange={handleInputChange}
                type='text'
                name='text filters name'
                aria-label='text filters name'
            />
            <SortFilter />
            <DisplayFilter />
        </div>
    );
};
