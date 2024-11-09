import styles from './SidebarMob.module.css';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';
import { TotalProducts } from '../../CatalogComponents/TotalProducts/TotalProducts';
import { useEffect, useRef, useState } from 'react';
import { SidebarContent } from '../SidebarContent/SidebarContent';
import cn from 'classnames';

export const SidebarMob = (): JSX.Element => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [isSidebarFixed, setSidebarFixed] = useState<boolean>(false);

    const sidebarRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
                && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 120) {
                if (!isSidebarFixed) {
                    setSidebarFixed(true);
                }
            } else {
                if (isSidebarFixed) {
                    setSidebarFixed(false);
                }
            }

            setDropdownOpen(false);
        };

        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSidebarFixed]);

    return (
        <div className={cn(styles.sidebar, {
            [styles.fixedSidebar]: isSidebarFixed,
        })}>
            <div ref={sidebarRef} className={styles.sidebarWrapper}
                onClick={() => setDropdownOpen(!isDropdownOpen)}>
                <TotalProducts />
                <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isDropdownOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}>
                    <ArrowIcon className={styles.arrowIcon} />
                </motion.span>
            </div>
            {
                isDropdownOpen ?
                    <div ref={dropdownRef} className={styles.sidebarDropdown}>
                        <SidebarContent setDropdownOpen={setDropdownOpen} />
                    </div>
                : null
            }
        </div>
    );
};
