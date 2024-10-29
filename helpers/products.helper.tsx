import axios, { AxiosResponse } from "axios";
import { GetProductsArguments } from "../interfaces/refactor.interface";
import { ProductsInterface } from "../interfaces/product.interface";
import { setProducts, setProductsDefault } from "../features/products/productsSlice";


export async function getProducts(args: GetProductsArguments, isFavorite?: boolean) {
    const { filters, dispatch } = args;

    let apiUrl: string = `/list/${filters.start.class}?favorite=${isFavorite}&limit=${filters.start.limit}&offset=${filters.start.offset}&${filters.sort}${filters.is_available === 'True' ? `&by_sklad_available=${filters.is_available}` : ''}${filters.name?.trim() ? `&name=${filters.name?.trim()}` : ''}`;

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
                
        dispatch(setProducts(response));
    } catch (err) {
        console.error('Get products error: ' + err);
    }
}
