import styles from './SortFilter.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useRef, useState } from 'react';
import FiltersIcon from './filters.svg';
import { switchIsAvailable, switchSort } from '../../../features/filters/filtersSlice';
import { SortFilters } from '../../../interfaces/filters.interface';
import cn from 'classnames';


export const SortFilter = (): JSX.Element => {
    const { router, dispatch, filters } = useSetup();

    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div className={styles.sortFilters}>
            <Htag tag='s' className={styles.filterText} onClick={() => setDropdownVisible(!dropdownVisible)}>
                <FiltersIcon />
                <span>{setLocale(router.locale).filters}</span>
            </Htag>
            {
                dropdownVisible ?
                    <div ref={dropdownRef} className={styles.dropdown}>
                        <Htag tag='s' className={styles.sortTitle}>
                            {setLocale(router.locale).sort_title}
                        </Htag>
                        {sortFilters.map((s) => (
                            <Htag key={s} tag='s' className={cn(styles.dropdownItem, {
                                [styles.activeItem]: filters.sort === s,
                            })} onClick={() => {
                                dispatch(switchSort(s));
                                setDropdownVisible(false);
                            }}>
                                {setLocale(router.locale).sort[s.replace('=', '_') as 'by_name_asc']}
                            </Htag>
                        ))}
                        {
                            filters.start.class === 'product' ?
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" checked={filters.is_available === 'True'}
                                        onChange={() => {
                                            dispatch(switchIsAvailable());
                                            setDropdownVisible(false);
                                        }} />
                                    <Htag tag='s' className={styles.filterText}>
                                        {setLocale(router.locale).in_stock}
                                    </Htag>
                                </label>
                            : <></>
                        }
                    </div>
                : <></>
            }
        </div>
    );
};
