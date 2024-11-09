import { SearchPage } from '../../page_components/SearchPage/SearchPage';
import Head from 'next/head';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { useEffect } from 'react';
import { setFavorites } from '../../features/favorites/favoritesSlice';
import { getFavorites } from '../../helpers/favorites.helper';


function Search(): JSX.Element {
    const { router, dispatch } = useSetup();

    useEffect(() => {
        dispatch(setFavorites(getFavorites()));
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).search}</title>
                <meta name='description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).search} />
                <meta property='og:title' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).search} />
                <meta name='og:description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).search} />
                <meta charSet="utf-8" />
            </Head>
            <SearchPage />
        </>
    );
}

export default Search;
