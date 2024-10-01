import { CatalogPage } from '../../page_components/CatalogPage/CatalogPage';
import Head from 'next/head';
import { setLocale } from '../../helpers/locale.helper';
import { useEffect } from 'react';
import { useSetup } from '../../hooks/useSetup';
import { getClasses } from '../../helpers/classes.helper';
import { getCategories } from '../../helpers/categories.helper';
import { getProducts } from '../../helpers/products.helper';


function Catalog(): JSX.Element {
    const { router, dispatch } = useSetup();

    useEffect(() => {
        getClasses({
            dispatch: dispatch,
        });

        getCategories({
            dispatch: dispatch,
        });

        getProducts({
            type: 'product',
            dispatch: dispatch,
        });
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).catalog}</title>
                <meta name='description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).catalog} />
                <meta property='og:title' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).catalog} />
                <meta name='og:description' content={setLocale(router.locale).prioritet_portal + ' - ' + setLocale(router.locale).catalog} />
                <meta charSet="utf-8" />
            </Head>
            <CatalogPage />
        </>
    );
}

export default Catalog;
