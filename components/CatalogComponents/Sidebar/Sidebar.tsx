import styles from './Sidebar.module.css';
import { useEffect, useState } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { motion } from 'framer-motion';
import { getProducts, getProductsForCategories } from '../../../helpers/products.helper';
import { setProductsDefault } from '../../../features/products/productsSlice';
import { useResizeW } from '../../../hooks/useResize';
import { BurgerMenu } from '../../Common/BurgerMenu/BurgenMenu';
import Arrow from './arrow.svg';
import cn from 'classnames';


export const Sidebar = (): JSX.Element => {
    const { dispatch, classes, categories } = useSetup();

    const [expandedSidebar, setExpandedSidebar] = useState<boolean>(false);

    const width = useResizeW();

    const [expandedClass, setExpandedClass] = useState<string | null>('product');
    const [activeClass, setActiveClass] = useState<string | null>('product');
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

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
            height: 'calc(100vh - 110px)',
            gap: '20px',
        },
        hidden: {
            height: '20px',
            gap: 0,
        },
    };

    const variantsArrow = {
        visible: {
            rotate: '90deg',
        },
        hidden: {
            rotate: 0,
        },
    };

    const handleClassClick = (classTag: string) => {
        if (activeClass === classTag) return;

        setActiveCategory(null);
        setActiveClass(classTag);
        dispatch(setProductsDefault());
        setExpandedClass(classTag);

        getProducts({
            type: classTag,
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

    useEffect(() => {
        if (expandedSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [expandedSidebar]);

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
                        {classes.findLast(it => it.class_tag === expandedClass)?.name}
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
                <motion.div key={c.id} className={styles.sidebarDiv}
                    variants={variants}
                    initial={expandedSidebar || width > 580 ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5 }}
                    animate={expandedSidebar || width > 580 ? 'visible' : 'hidden'}>
                    <Htag tag='s' className={styles.classTitle}
                        onClick={() => handleClassClick(c.class_tag)}>
                        {c.name}
                        <motion.span className={styles.arrow}
                            variants={variantsArrow}
                            initial={expandedClass === c.class_tag ? 'visible' : 'hidden'}
                            transition={{ duration: 0.3 }}
                            animate={expandedClass === c.class_tag ? 'visible' : 'hidden'}>
                            <Arrow />
                        </motion.span>
                    </Htag>
                    <motion.div className={styles.categoryList}
                        variants={variants}
                        initial={expandedClass === c.class_tag ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        animate={expandedClass === c.class_tag ? 'visible' : 'hidden'}>
                        {categories
                            .filter(cat => cat.category_for === c.class_tag)
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
