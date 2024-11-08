import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useSetup } from "../../hooks/useSetup";
import { setLocale } from "../../helpers/locale.helper";
import { useEffect } from "react";
import { getProducts } from "../../helpers/products.helper";
import { setFiltersDefault } from "../../features/filters/filtersSlice";
import { setDisplay } from "../../features/display/displaySlice";


function Main(): JSX.Element {
  const { router, dispatch, filters } = useSetup();

  useEffect(() => {
    dispatch(setFiltersDefault());
    dispatch(setDisplay('grid'));
    
    getProducts({
      dispatch: dispatch,
      filters: filters,
    }, true);
  }, [filters, dispatch]);

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
