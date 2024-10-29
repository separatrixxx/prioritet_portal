import styles from './FiltersBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useRef, useState } from 'react';
import GridIcon from './grid.svg';
import RowsIcon from './rows.svg';
import LinesIcon from './lines.svg';
import { setDisplay, setFiltersName, switchIsAvailable, switchSort } from '../../../features/filters/filtersSlice';
import { SortFilters } from '../../../interfaces/filters.interface';
import cn from 'classnames';


export const FiltersBar = (): JSX.Element => {
    const { router, dispatch, filters } = useSetup();

    const [name, setName] = useState<string>('');
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [dropdownRef]);

    const sortFilters: SortFilters[] = ['by_name=asc', 'by_name=desc', 'by_price=low', 'by_price=high'];

    return (
        <div className={cn(styles.filtersBar, {
            [styles.commonFiltersBar]: filters.start.class !== 'product',
        })}>
            <input className={styles.filtersName}
                placeholder={setLocale(router.locale).name}
                value={name}
                onChange={handleInputChange}
                type='text'
                name='text filters name'
                aria-label='text filters name'
            />
            <div className={styles.dropdownContainer}>
                <Htag tag='s' className={styles.filterText} onClick={() => setDropdownVisible(!dropdownVisible)}>
                    {setLocale(router.locale).sort_title + ': '}
                    <span>{setLocale(router.locale).sort[filters.sort.replace('=', '_') as 'by_name_asc']}</span>
                </Htag>
                {
                    dropdownVisible ?
                        <div ref={dropdownRef} className={styles.dropdown}>
                            {sortFilters.map((s) => (
                                <Htag key={s} tag='s' className={styles.dropdownItem} onClick={() => {
                                    dispatch(switchSort(s));
                                    setDropdownVisible(false);
                                }}>
                                    {setLocale(router.locale).sort[s.replace('=', '_') as 'by_name_asc']}
                                </Htag>
                            ))}
                        </div>
                        : <></>
                }
            </div>
            {
                filters.start.class === 'product' ?
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" checked={filters.is_available === 'True'}
                            onChange={() => dispatch(switchIsAvailable())} />
                        <Htag tag='s' className={styles.filterText}>
                            {setLocale(router.locale).in_stock}
                        </Htag>
                    </label>
                    : <></>
            }
            <div className={styles.displayDiv}>
                <LinesIcon className={cn(styles.displayIcon, {
                    [styles.activeIcon]: filters.display === 'lines',
                })} onClick={() => dispatch(setDisplay('lines'))} />
                <RowsIcon className={cn(styles.displayIcon, {
                    [styles.activeIcon]: filters.display === 'rows',
                })} onClick={() => dispatch(setDisplay('rows'))} />
                <GridIcon className={cn(styles.displayIcon, {
                    [styles.activeIcon]: filters.display === 'grid',
                })} onClick={() => dispatch(setDisplay('grid'))} />
            </div>
        </div>
    );
};
