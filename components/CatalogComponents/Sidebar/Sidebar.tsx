import styles from './Sidebar.module.css';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { motion, AnimatePresence } from 'framer-motion';
import { getProducts, getProductsForCategories } from '../../../helpers/products.helper';
import { setProductsDefault } from '../../../features/products/productsSlice';
import { Categories } from '../../../interfaces/categories.interface';


export const Sidebar = (): JSX.Element => {
    const { router, dispatch, categories } = useSetup();

    const [expandedClass, setExpandedClass] = useState<Categories | null>(null);
    const [activeClass, setActiveClass] = useState<Categories | null>(null);
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    const classes: Categories[] = ['product', 'harmful', 'proceed'];

    const variants = {
        hidden: {
            height: 0,
            opacity: 0,
            transitionEnd: {
                display: 'none'
            }
        },
        visible: {
            display: 'grid',
            height: 'auto',
            opacity: 1,
        },
    };

    const handleClassClick = (c: Categories) => {
        if (activeClass === c) return;

        setActiveCategory(null);
        setActiveClass(c);
        dispatch(setProductsDefault());
        setExpandedClass(c);
        getProducts({
            type: c,
            dispatch: dispatch,
        });
    };

    const handleCategoryClick = (categoryId: number) => {
        if (activeCategory === categoryId) return;

        setActiveClass(null);
        setActiveCategory(categoryId);
        dispatch(setProductsDefault());
        getProductsForCategories({
            categoryId: categoryId,
            dispatch: dispatch,
        });
    };


    return (
        <div className={styles.sidebar}>
            {classes.map(c => (
                <div key={c} className={styles.sidebarDiv}>
                    <Htag tag='s' className={styles.classTitle}
                        onClick={() => handleClassClick(c)}>
                        {setLocale(router.locale).classes[c as 'product']}
                    </Htag>
                    <AnimatePresence initial={false}>
                        {expandedClass === c && (
                            <motion.div
                                className={styles.categoryList}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={variants}
                                transition={{ duration: 0.5, ease: "easeInOut" }}>
                                {categories
                                    .filter(cat => cat.category_for === c)
                                    .map(c => (
                                        <Htag key={c.id} tag='s' className={styles.categoryItem}
                                            onClick={() => handleCategoryClick(c.id)}>
                                            {c.name}
                                        </Htag>
                                    ))
                                }
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};
