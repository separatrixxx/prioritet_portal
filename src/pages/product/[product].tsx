import { ProductPage } from "../../../page_components/ProductPage/ProductPage";
import Head from "next/head";
import { useSetup } from "../../../hooks/useSetup";
import { setLocale } from "../../../helpers/locale.helper";
import { ProductById } from "../../../interfaces/product.interface";
import { GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";


function Product({ product }: ProductProps): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).prioritet_portal + ' - ' + product.result.name}</title>
                <meta name='description' content={setLocale(router.locale).prioritet_portal + ' - ' + product.result.name} />
                <meta property='og:title' content={setLocale(router.locale).prioritet_portal + ' - ' + product.result.name} />
                <meta name='og:description' content={setLocale(router.locale).prioritet_portal + ' - ' + product.result.name} />
                <meta charSet="utf-8" />
            </Head>
            <ProductPage product={product} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<ProductProps> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const { data: product }: AxiosResponse<ProductById> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/object/product/${params.product}`,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        return {
            props: {
                product,
            },
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface ProductProps extends Record<string, unknown> {
    product: ProductById,
}

export default Product;
