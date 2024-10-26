import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useSetup } from "../../hooks/useSetup";
import { setLocale } from "../../helpers/locale.helper";
import { useEffect } from "react";
import { getProducts } from "../../helpers/products.helper";
import { setProductsDefault } from "../../features/products/productsSlice";


function Main(): JSX.Element {
  const { router, dispatch } = useSetup();

  useEffect(() => {
      dispatch(setProductsDefault());
      
      getProducts({
        type: 'product',
        dispatch: dispatch,
        limit: 100,
        offset: 0,
        filters: {
          sort: 'by_name=asc',
        },
      }, true);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).prioritet_portal}</title>
        <meta name='description' content={setLocale(router.locale).prioritet_portal} />
        <meta property='og:title' content={setLocale(router.locale).prioritet_portal} />
        <meta name='og:description' content={setLocale(router.locale).prioritet_portal} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
