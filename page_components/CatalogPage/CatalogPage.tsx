import styles from './CatalogPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '../../components/Headers/Header/Header';
import { CatalogBlock } from '../../components/CatalogComponents/CatalogBlock/CatalogBlock';


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
                <CatalogBlock />
            </div>
        </>
    );
};
