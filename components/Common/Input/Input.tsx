import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Htag } from '../Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { ClassInterface } from '../../../interfaces/classes.interface';


export const Input = ({ text, value, onChange, onKeyPress }: InputProps): JSX.Element => {
    const { classes } = useSetup();
    
    const [selectedClass, setSelectedClass] = useState<string>('product');
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const handleCategoryClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = (c: string) => {
        setSelectedClass(c);
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

    console.log(classes[0])

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.category} onClick={handleCategoryClick}>
                {classes.findLast(it => it.class_tag === selectedClass)?.name}
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
                        {classes.map((c) => (
                            <Htag tag='s' key={c.id} className={styles.dropdownItem}
                                onClick={() => handleCategorySelect(c.class_tag)}>
                                {c.name}
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
