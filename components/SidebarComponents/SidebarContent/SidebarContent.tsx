import { SidebarContentProps } from './SidebarContent.props';
import styles from './SidebarContent.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setCategoryId, setClass } from '../../../features/filters/filtersSlice';
import { setLocale } from '../../../helpers/locale.helper';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';
import cn from 'classnames';


export const SidebarContent = ({ setDropdownOpen }: SidebarContentProps): JSX.Element => {
    const { router, dispatch, classes, categories, filters } = useSetup();

    return (
        <>
            {classes.map(c => (
                <div key={c.class_tag} className={styles.sidebarContent}>
                    <Htag tag='s' className={cn(styles.classTitle, {
                        [styles.active]: filters.start.class === c.class_tag && !filters.start.categoryId,
                    })}
                        onClick={() => {
                            dispatch(setCategoryId(0));
                            dispatch(setClass(c.class_tag));
                        }}>
                        {setLocale(router.locale).classes[c.class_tag as 'product']}
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: filters.start.class === c.class_tag ? 90 : 0 }}
                            transition={{ duration: 0.3 }}>
                            <ArrowIcon />
                        </motion.span>
                    </Htag>
                    {
                        filters.start.class === c.class_tag ?
                            <div className={styles.categoriesDiv}>
                                {categories.map(c => (
                                    <Htag key={c.id} tag='s' className={cn(styles.categoryTitle, {
                                        [styles.active]: filters.start.categoryId === c.id,
                                    })}
                                        onClick={() => {
                                            setDropdownOpen ? setDropdownOpen(false) : null;
                                            dispatch(setCategoryId(c.id));
                                        }}>
                                        {c.name}
                                    </Htag>
                                ))}
                            </div>
                        : <></>
                    }
                </div>
            ))}
        </>
    );
};
