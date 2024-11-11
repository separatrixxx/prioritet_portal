import { FavoritesPage } from '../../page_components/FavoritesPage/FavoritesPage';
import Head from 'next/head';
import { setLocale } from '../../helpers/locale.helper';
import { useSetup } from '../../hooks/useSetup';
import { useEffect } from 'react';
import { setFiltersDefault } from '../../features/filters/filtersSlice';
import { setDisplay } from '../../features/display/displaySlice';
import { getProducts } from '../../helpers/products.helper';


function Favorites(): JSX.Element {
    const { router, dispatch, filters, favorites } = useSetup();

    useEffect(() => {
        dispatch(setFiltersDefault());
        dispatch(setDisplay('grid'));
        
        getProducts({
          dispatch: dispatch,
          filters: filters,
        }, true);
      }, [filters, favorites, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart}</title>
                <meta name='description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart} />
                <meta property='og:title' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart} />
                <meta name='og:description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).cart} />
                <meta charSet="utf-8" />
            </Head>
            <FavoritesPage />
        </>
    );
}

export default Favorites;
