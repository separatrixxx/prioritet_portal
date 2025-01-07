import styles from './ContactsPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { useSetup } from '../../hooks/useSetup';
import { ProfileInfo } from '../../components/ProfileComponents/ProfileInfo/ProfileInfo';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { InterestingProducts } from '../../components/ProductsComponents/InterestingProducts/InterestingProducts';
import { ContactsBlock } from '../../components/ContactsComponents/ContactsBlock/ContactsBlock';


export const ContactsPage = (): JSX.Element => {
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
                <ContactsBlock />
            </div>
        </>
    );
};
