import axios, { AxiosResponse } from "axios";
import { GetProductsArguments, GetProductsForCategoriesArguments } from "../interfaces/refactor.interface";
import { ProductsInterface } from "../interfaces/product.interface";
import { setProducts } from "../features/products/productsSlice";


export async function getProducts(args: GetProductsArguments) {
    const { type, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<ProductsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/list/' + type, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setProducts(response.results));
    } catch (err) {      
        console.log(err);
    }
}

export async function getProductsForCategories(args: GetProductsForCategoriesArguments) {
    const { categoryId, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<ProductsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/category/' + categoryId, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setProducts(response));
    } catch (err) {      
        console.log(err);
    }
}
