import axios, { AxiosResponse } from "axios";
import { GetProductsArguments, GetProductsForCategoriesArguments } from "../interfaces/refactor.interface";
import { ProductsInterface } from "../interfaces/product.interface";
import { setProducts } from "../features/products/productsSlice";


export async function getProducts(args: GetProductsArguments) {
    const { type, limit, offset, dispatch } = args;

    try {
        const { data: response }: AxiosResponse<ProductsInterface> = await axios.get(
            `${process.env.NEXT_PUBLIC_DOMAIN}/list/${type}?limit=${limit}&offset=${offset}`,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            }
        );

        dispatch(setProducts({
            results: response.results,
            total_count: response.total_count,
            limit: response.limit,
            offset: response.offset,
        }));
    } catch (err) {
        console.log(err);
    }
}

export async function getProductsForCategories(args: GetProductsForCategoriesArguments) {
    const { categoryId, dispatch } = args;

    try {
        const { data: response }: AxiosResponse<ProductsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/category/' + categoryId,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            }
        );

        dispatch(setProducts({
            results: response,
            total_count: 0,
            limit: 1000,
            offset: 0,
        }));
    } catch (err) {
        console.log(err);
    }
}
