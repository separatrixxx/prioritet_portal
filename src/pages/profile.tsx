import { ProfilePage } from '../../page_components/ProfilePage/ProfilePage';
import Head from 'next/head';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { useEffect } from 'react';
import { setFavorites } from '../../features/favorites/favoritesSlice';
import { getFavorites } from '../../helpers/favorites.helper';


function Catalog(): JSX.Element {
    const { router, dispatch } = useSetup();

    useEffect(() => {
        dispatch(setFavorites(getFavorites()));
    }, [dispatch]);

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

export default Catalog;
