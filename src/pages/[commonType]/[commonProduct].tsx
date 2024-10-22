import { ProductPage } from "../../../page_components/ProductPage/ProductPage";
import Head from "next/head";
import { useSetup } from "../../../hooks/useSetup";
import { setLocale } from "../../../helpers/locale.helper";
import { CommonProductById } from "../../../interfaces/product.interface";
import { GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";


function CommonProduct({ commonProduct }: CommonProductProps): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).prioritet_portal + ' - ' + commonProduct.result.name}</title>
                <meta name='description' content={setLocale(router.locale).prioritet_portal + ' - ' + commonProduct.result.name} />
                <meta property='og:title' content={setLocale(router.locale).prioritet_portal + ' - ' + commonProduct.result.name} />
                <meta name='og:description' content={setLocale(router.locale).prioritet_portal + ' - ' + commonProduct.result.name} />
                <meta charSet="utf-8" />
            </Head>
            <ProductPage commonProduct={commonProduct} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<CommonProductProps> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const { data: commonProduct }: AxiosResponse<CommonProductById> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/object/${params.commonType}/${params.commonProduct}`,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        return {
            props: {
                commonProduct,
            },
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface CommonProductProps extends Record<string, unknown> {
    commonProduct: CommonProductById,
}

export default CommonProduct;
