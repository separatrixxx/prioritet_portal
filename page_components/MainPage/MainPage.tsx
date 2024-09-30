import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '../../components/Headers/Header/Header';


export const MainPage = (): JSX.Element => {   
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
            </div>
        </>
    );
};
