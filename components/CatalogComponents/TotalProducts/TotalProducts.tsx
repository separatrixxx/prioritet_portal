import styles from './TotalProducts.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const TotalProducts = (): JSX.Element => {
    const { router, products, filters, categories } = useSetup();

    return (
        <Htag tag='m' className={styles.totalProducts}>
            {products.total_count > -1 ?
                `${setLocale(router.locale).classes[filters.start.class as 'product']}
                        ${filters.start.categoryId ? ' > ' + categories.find(el => el.id === filters.start.categoryId)?.name : ''}
                        (${products.total_count})`
                : setLocale(router.locale).search + '...'}
        </Htag>
    );
};
