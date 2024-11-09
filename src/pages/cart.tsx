import { CartPage } from '../../page_components/CartPage/CartPage';
import Head from 'next/head';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { useEffect } from 'react';
import { setFavorites } from '../../features/favorites/favoritesSlice';
import { getFavorites } from '../../helpers/favorites.helper';


function Cart(): JSX.Element {
    const { router, dispatch } = useSetup();

    useEffect(() => {
        dispatch(setFavorites(getFavorites()));
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart}</title>
                <meta name='description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart} />
                <meta property='og:title' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart} />
                <meta name='og:description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart} />
                <meta charSet="utf-8" />
            </Head>
            <CartPage />
        </>
    );
}

export default Cart;
