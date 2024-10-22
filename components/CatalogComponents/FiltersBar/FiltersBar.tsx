import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './FiltersBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { switchIsAvailable, switchSort } from '../../../features/filters/filtersSlice';
import { SortFilters } from '../../../interfaces/filters.interface';
import { setLocale } from '../../../helpers/locale.helper';
import ByNameAsc from './by_name_asc.svg';
import ByNameDesc from './by_name_desc.svg';
import ByPriceLow from './by_price_low.svg';
import ByPriceHigh from './by_price_high.svg';

export const FiltersBar = (): JSX.Element => {
    const { router, dispatch, filters } = useSetup();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const [currentSort, setCurrentSort] = useState<SortFilters>('by_name=asc');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSortChange = (sortOption: SortFilters) => {
        setCurrentSort(sortOption);
        dispatch(switchSort(sortOption));
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const iconVariants = {
        flip: { scaleX: 1, transition: { duration: 0.5 } },
    };

    const renderIcon = () => {
        switch (currentSort) {
            case 'by_name=asc':
                return <ByNameAsc />;
            case 'by_name=desc':
                return <ByNameDesc />;
            case 'by_price=low':
                return <ByPriceLow />;
            case 'by_price=high':
                return <ByPriceHigh />;
            default:
                return <ByNameAsc />;
        }
    };

    const sortFilters: SortFilters[] = ['by_name=asc', 'by_name=desc', 'by_price=low', 'by_price=high'];

    return (
        <div className={styles.filtersBar}>
            <div className={styles.dropdown} ref={dropdownRef}>
                <Htag tag='s' className={styles.sortTitle} onClick={toggleDropdown}>
                    <motion.div
                        key={currentSort}
                        variants={iconVariants}
                        initial={{ scaleX: -1 }}
                        animate="flip"
                    >
                        {renderIcon()}
                    </motion.div>
                    {setLocale(router.locale).sort[filters.sort.replace('=', '_') as 'by_name_asc']}
                </Htag>
                {
                    isDropdownOpen ?
                        <div className={styles.dropdownContent}>
                            {sortFilters.map((s) => (
                                <Htag key={s} tag='s' onClick={() => handleSortChange(s)}>
                                    {setLocale(router.locale).sort[s.replace('=', '_') as 'by_name_asc']}
                                </Htag>
                            ))}
                        </div>
                    : <></>
                }
            </div>
            <label className={styles.checkboxLabel}>
                <input
                    type="checkbox"
                    checked={filters.is_available === 'True'}
                    onChange={() => dispatch(switchIsAvailable())}
                />
                <Htag tag='s' className={styles.sortTitle}>
                    {setLocale(router.locale).in_stock}
                </Htag>
            </label>
        </div>
    );
};
