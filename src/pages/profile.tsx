import { ProfilePage } from '../../page_components/ProfilePage/ProfilePage';
import Head from 'next/head';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { useEffect } from 'react';
import { getUserOrders } from '../../helpers/orders.helper';


function Profile(): JSX.Element {
    const { router, dispatch, user } = useSetup();

    useEffect(() => {
        getUserOrders({
            dispatch: dispatch,
        });
    }, [user.id, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).profile}</title>
                <meta name='description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).profile} />
                <meta property='og:title' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).profile} />
                <meta name='og:description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).profile} />
                <meta charSet="utf-8" />
            </Head>
            <ProfilePage />
        </>
    );
}

export default Profile;
