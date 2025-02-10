import styles from './SearchPage.module.css';
import { Toaster } from 'react-hot-toast';
import { SearchList } from '../../components/SearchComponents/SearchList/SearchList';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { Footer } from '../../components/Common/Footer/Footer';


export const SearchPage = (): JSX.Element => {
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
                <Header type='other' />
                <SearchList />
                <Footer />
            </div>
        </>
    );
};
