import styles from './Sidebar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setCategoryId, setClass } from '../../../features/filters/filtersSlice';
import { setLocale } from '../../../helpers/locale.helper';


export const Sidebar = (): JSX.Element => {
    const { router, dispatch, classes, categories, filters } = useSetup();

    return (
        <div className={styles.sidebar}>
            {classes.map(c => (
                <div key={c.class_tag} className={styles.sidebarDiv}>
                    <Htag tag='s' className={styles.classTitle}
                        onClick={() => {
                            dispatch(setCategoryId(0));
                            dispatch(setClass(c.class_tag));
                        }}>
                        {setLocale(router.locale).classes[c.class_tag as 'product']}
                    </Htag>
                    {
                        filters.start.class === c.class_tag ?
                            <div className={styles.categoriesDiv}>
                                {categories.map(c => (
                                    <Htag key={c.id} tag='s' className={styles.categoryTitle}
                                        onClick={() => dispatch(setCategoryId(c.id))}>
                                        {c.name}
                                    </Htag>
                                ))}
                            </div>
                        : <></>
                    }
                </div>
            ))}
        </div>
    );
};
