import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { MainImage } from '../../components/MainComponents/MainImage/MainImage';
import { Htag } from '../../components/Common/Htag/Htag';
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
                <MainImage />
                <Htag tag='l' className={styles.description}>
                    {'Здесь информация о том, какой наш портал нереально крутой, современный, красивый и полезный. И вообще какие мы все с вами молодцы!'}
                </Htag>
                <Footer />
            </div>
        </>
    );
};
