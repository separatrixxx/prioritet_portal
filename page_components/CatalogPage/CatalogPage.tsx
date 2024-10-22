import styles from './CatalogPage.module.css';
import { Toaster } from 'react-hot-toast';
import { CatalogList } from '../../components/CatalogComponents/CatalogList/CatalogList';
import { Sidebar } from '../../components/CatalogComponents/Sidebar/Sidebar';
import { FiltersBar } from '../../components/CatalogComponents/FiltersBar/FiltersBar';
import { Header } from '../../components/Headers/Header/Header';


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
                <Header />
                <div className={styles.catalogDiv}>
                    <Sidebar />
                    <div className={styles.listDiv}>
                        <FiltersBar />
                        <CatalogList />
                    </div>
                </div>
            </div>
        </>
    );
};
