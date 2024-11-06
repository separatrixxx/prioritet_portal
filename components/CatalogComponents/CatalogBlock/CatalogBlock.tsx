import styles from './CatalogBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { Sidebar } from '../Sidebar/Sidebar';
import { setLocale } from '../../../helpers/locale.helper';
import { FiltersBar } from '../FiltersBar/FiltersBar';
import { ProductList } from '../../ProductsComponents/ProductList/ProductList';


export const CatalogBlock = (): JSX.Element => {
    const { router, products, filters, categories } = useSetup();

    return (
        <div className={styles.catalogBlock}>
            <Sidebar />
            <div className={styles.catalogDiv}>
                <FiltersBar />
                <Htag tag='m' className={styles.totalProducts}>
                    {products.total_count > -1 ?
                        `${setLocale(router.locale).classes[filters.start.class as 'product']}
                        ${filters.start.categoryId ? ' > ' + categories.find(el => el.id === filters.start.categoryId)?.name : ''}
                        (${products.total_count})`
                        : setLocale(router.locale).search + '...'}
                </Htag>
                <ProductList />
            </div>
        </div>
    );
};
