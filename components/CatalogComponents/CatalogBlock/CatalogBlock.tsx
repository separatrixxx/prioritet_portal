import styles from './CatalogBlock.module.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { ProductList } from '../../ProductsComponents/ProductList/ProductList';
import { FiltersBar } from '../../FiltersComponens/FiltersBar/FiltersBar';
import { TotalProducts } from '../TotalProducts/TotalProducts';


export const CatalogBlock = (): JSX.Element => {
    return (
        <div className={styles.catalogBlock}>
            <Sidebar />
            <div className={styles.catalogDiv}>
                <FiltersBar />
                <TotalProducts />
                <ProductList />
            </div>
        </div>
    );
};
