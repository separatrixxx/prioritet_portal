import styles from './SearchPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSetup } from '../../hooks/useSetup';
import { SearchList } from '../../components/SearchComponents/SearchList/SearchList';
import { Header } from '../../components/Headers/Header/Header';


export const SearchPage = (): JSX.Element => {
    const { router } = useSetup();

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
                <SearchList />
            </div>
        </>
    );
};
