import axios, { AxiosResponse } from "axios";
import { GetProductsArguments, GetProductsForCategoriesArguments } from "../interfaces/refactor.interface";
import { ProductsForCategoriesInterface, ProductsInterface } from "../interfaces/product.interface";
import { setProducts } from "../features/products/productsSlice";


export async function getProducts(args: GetProductsArguments) {
    const { type, limit, offset, filters, dispatch } = args;

    try {       
        const { data: response }: AxiosResponse<ProductsInterface> = await axios.get(
            `${process.env.NEXT_PUBLIC_DOMAIN}/list/${type}?limit=${limit}&offset=${offset}&${filters.sort}${filters.is_available === 'True' ? `&by_sklad_available=${filters.is_available}` : ''}`,
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
        console.error('Get products error: ' + err);
    }
}

export async function getProductsForCategories(args: GetProductsForCategoriesArguments) {
    const { categoryId, limit, offset, filters, dispatch } = args;

    try {       
        const { data: response }: AxiosResponse<ProductsForCategoriesInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/category/${categoryId}?limit=${limit}&offset=${offset}&${filters.sort}${filters.is_available === 'True' ? `&by_sklad_available=${filters.is_available}` : ''}`,
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
        console.error('Get products for categories error: ' + err);
    }
}
