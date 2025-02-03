import styles from './CatalogBlock.module.css';
import { ProductList } from '../../ProductsComponents/ProductList/ProductList';
import { FiltersBar } from '../../FiltersComponens/FiltersBar/FiltersBar';
import { TotalProducts } from '../TotalProducts/TotalProducts';
import { Sidebar } from '../../SidebarComponents/Sidebar/Sidebar';


export const CatalogBlock = (): JSX.Element => {
    return (
        <div className={styles.catalogBlock}>
            <Sidebar />
            <div className={styles.catalogDiv}>
                <FiltersBar />
                <div className={styles.totalProductsDiv}>
                    <TotalProducts />
                </div>
                <ProductList />
            </div>
        </div>
    );
};
