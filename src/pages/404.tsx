import { ErrorPage } from '../../page_components/ErrorPage/ErrorPage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { setLocale } from '../../helpers/locale.helper';


function PageNotFound(): JSX.Element {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{setLocale(router.locale).prioritet_portal + ' - 404'}</title>
			</Head>
			<ErrorPage error={404} />
		</>
	);
}

export default PageNotFound;
