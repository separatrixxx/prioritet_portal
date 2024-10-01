import styles from './Sidebar.module.css';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { motion } from 'framer-motion';
import { getProducts, getProductsForCategories } from '../../../helpers/products.helper';
import { setProductsDefault } from '../../../features/products/productsSlice';
import { Categories } from '../../../interfaces/categories.interface';
import { useResizeW } from '../../../hooks/useResize';
import { BurgerMenu } from '../../Common/BurgerMenu/BurgenMenu';
import cn from 'classnames';


export const Sidebar = (): JSX.Element => {
    const { router, dispatch, categories } = useSetup();

    const [expandedSidebar, setExpandedSidebar] = useState<boolean>(false);

    const width = useResizeW();

    const [expandedClass, setExpandedClass] = useState<Categories | null>('product');
    const [activeClass, setActiveClass] = useState<Categories | null>('product');
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    const classes: Categories[] = ['product', 'harmful', 'proceed'];

    const variants = {
        visible: {
            display: 'grid',
            height: 'auto',
            opacity: 1,
        },
        hidden: {
            display: 'none',
            height: 0,
            opacity: 0,
        },
    };

    const variantsSidebar = {
        visible: {
            gap: '20px',
        },
        hidden: {
            gap: 0,
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
        <motion.div className={styles.sidebar}
            variants={variantsSidebar}
            initial={expandedSidebar || width > 580 ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
            animate={expandedSidebar || width > 580 ? 'visible' : 'hidden'}>
            <div className={cn(styles.sidebarHeader, {
                [styles.hiddenSidebarHeader]: !expandedSidebar && width <= 580,
            })}>
                <Htag tag='s' className={styles.currentRoute}>
                    <span className={styles.currentRouteItem} onClick={() => {
                        if (expandedClass) {
                            setExpandedSidebar(false);
                            handleClassClick(expandedClass);
                        }
                    }}>
                        {setLocale(router.locale).classes[expandedClass as 'product']}
                    </span>
                    {
                        activeCategory ?
                            <span>
                                {' > ' + categories.find(it => it.id === activeCategory)?.name}
                            </span>
                        : <></>
                    }
                </Htag>
                {
                    width <= 580 ?
                        <BurgerMenu open={expandedSidebar} setOpen={setExpandedSidebar} />
                    : <></>
                }
            </div>
            {classes.map(c => (
                <motion.div key={c} className={styles.sidebarDiv}
                    variants={variants}
                    initial={expandedSidebar || width > 580 ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                    animate={expandedSidebar || width > 580 ? 'visible' : 'hidden'}>
                    <Htag tag='s' className={styles.classTitle}
                        onClick={() => handleClassClick(c)}>
                        {setLocale(router.locale).classes[c as 'product']}
                    </Htag>
                    <motion.div className={styles.categoryList}
                        variants={variants}
                        initial={expandedClass === c ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        animate={expandedClass === c ? 'visible' : 'hidden'}>
                        {categories
                            // .filter(cat => cat.category_for === c)
                            .map(c => (
                                <Htag key={c.id} tag='s' className={styles.categoryItem}
                                    onClick={() => {
                                        setExpandedSidebar(false);
                                        handleCategoryClick(c.id);
                                    }}>
                                    {c.name}
                                </Htag>
                            ))
                        }
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};
