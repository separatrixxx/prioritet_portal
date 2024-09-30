import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Htag } from '../Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Categories } from '../../../interfaces/categories.interface';


export const Input = ({ text, value, onChange, onKeyPress }: InputProps): JSX.Element => {
    const { router } = useSetup();
    
    const [selectedCategory, setSelectedCategory] = useState<Categories>('product');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const categories: Categories[] = ['product', 'harmful', 'proceed'];

    const handleCategoryClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = (category: Categories) => {
        setSelectedCategory(category);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!event.target || !(event.target as HTMLElement).closest(`.${styles.inputWrapper}`)) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.category} onClick={handleCategoryClick}>
                {setLocale(router.locale).classes[selectedCategory as 'product']}
            </div>
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        className={styles.dropdown}
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {categories.map((category) => (
                            <Htag tag='s' key={category} className={styles.dropdownItem}
                                onClick={() => handleCategorySelect(category)}>
                                {setLocale(router.locale).classes[category as 'product']}
                            </Htag>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <input className={styles.input}
                placeholder={text}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                type='text'
                name='text input'
                aria-label='text input' />
        </div>
    );
};
