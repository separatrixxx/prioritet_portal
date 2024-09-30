import styles from './CatalogPage.module.css';
import { Toaster } from 'react-hot-toast';
import { HeaderCatalog } from '../../components/Headers/HeaderCatalog/HeaderCatalog';
import { CatalogList } from '../../components/CatalogComponents/CatalogList/CatalogList';
import { Sidebar } from '../../components/CatalogComponents/Sidebar/Sidebar';


export const CatalogPage = (): JSX.Element => {   
    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <HeaderCatalog />
                <div className={styles.catalogDiv}>
                    <Sidebar />
                    <CatalogList />
                </div>
            </div>
        </>
    );
};
