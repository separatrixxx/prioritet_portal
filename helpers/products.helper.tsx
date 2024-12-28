import axios, { AxiosResponse } from "axios";
import { GetProductsArguments } from "../interfaces/refactor.interface";
import { ProductsInterface } from "../interfaces/product.interface";
import { setProducts, setProductsDefault } from "../features/products/productsSlice";
import { getFavorites } from "./favorites.helper";


export async function getProducts(args: GetProductsArguments, isFavorite?: boolean, isPopular?: boolean) {
    const { filters, dispatch } = args;

    let apiUrl: string = `/list/${filters.start.class}?favorite=${isPopular}&limit=${filters.start.limit}&offset=${filters.start.offset}&${filters.sort}${filters.is_available === 'True' ? `&by_sklad_available=${filters.is_available}` : ''}${filters.name?.trim() ? `&name=${filters.name?.trim()}` : ''}`;

    if (filters.start.categoryId) {
        apiUrl = `/category/${filters.start.categoryId}?limit=${filters.start.limit}&offset=${filters.start.offset}&${filters.sort}${filters.is_available === 'True' ? `&by_sklad_available=${filters.is_available}` : ''}`;
    }

    try {
        dispatch(setProductsDefault());

        const { data: response }: AxiosResponse<ProductsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + apiUrl,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            }
        );

        const favoriteIds = getFavorites();

        const filteredResponse = isFavorite
            ? { ...response, results: response.results.filter(product => favoriteIds.includes(product.id)) }
            : response;
                
        dispatch(setProducts(filteredResponse));
    } catch (err) {
        console.error('Get products error: ' + err);
    }
}
