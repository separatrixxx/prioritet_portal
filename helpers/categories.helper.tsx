import axios, { AxiosResponse } from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { CategoryInterface } from "../interfaces/categories.interface";
import { setCategories } from "../features/categories/categoriesSlice";


export async function getCategories(categoryFor: string, args: BaseArguments) {
    const { dispatch } = args;

    try {
        const { data : response }: AxiosResponse<CategoryInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/categories?category_for=' + categoryFor, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setCategories(response.results));
    } catch (err) {      
        console.error('Get categories error: ' + err);
    }
}
