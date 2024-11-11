import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { wrapper } from '../../features/store/store';
import { Provider } from 'react-redux';
import { AppProvider } from '../../layout/AppContext';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <AppProvider>
        <Head>
          <title>{setLocale(router.locale).prioritet_portal}</title>
          <meta name='description' content={setLocale(router.locale).prioritet_portal} />
          <meta property='og:title' content={setLocale(router.locale).prioritet_portal} />
          <meta property='og:description' content={setLocale(router.locale).prioritet_portal} />
          <meta charSet="utf-8" />
          <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  );
}
