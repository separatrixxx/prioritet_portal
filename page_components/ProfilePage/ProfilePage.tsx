import styles from './ProfilePage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { useSetup } from '../../hooks/useSetup';
import { ProfileInfo } from '../../components/ProfileComponents/ProfileInfo/ProfileInfo';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { InterestingProducts } from '../../components/ProductsComponents/InterestingProducts/InterestingProducts';


export const ProfilePage = (): JSX.Element => {
    const { user } = useSetup();

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
                <div className={styles.profileDiv}>
                    <ProfileInfo />
                    <InterestingProducts />
                </div>
                <Footer />
            </div>
        </>
    );
};
