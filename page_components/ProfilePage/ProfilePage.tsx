import styles from './ProfilePage.module.css';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../../components/Common/Footer/Footer';
import { useSetup } from '../../hooks/useSetup';
import { ProfileInfo } from '../../components/ProfileComponents/ProfileInfo/ProfileInfo';
import { Header } from '../../components/Headers/Header/Header';
import { useState } from 'react';
import { Button } from '../../components/Buttons/Button/Button';
import { setLocale } from '../../helpers/locale.helper';


export const ProfilePage = (): JSX.Element => {
    const { router } = useSetup();

    const [type, setType] = useState<'customer' | 'manager' | null>(null);

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
                {
                    type === 'customer' || type === 'manager' ?
                        <ProfileInfo type={type} />
                    :
                        <div className={styles.typesDiv}>
                            <Button text={setLocale(router.locale).customer} onClick={() => setType('customer')} />
                            <Button text={setLocale(router.locale).manager} onClick={() => setType('manager')} />
                        </div>
                }
                <Footer />
            </div>
        </>
    );
};
