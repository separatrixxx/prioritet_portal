import axios, { AxiosResponse } from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { CategoryInterface } from "../interfaces/categories.interface";
import { setCategories } from "../features/categories/categoriesSlice";
import { setClasses } from "../features/classes/classesSlice";


export async function getClasses(args: BaseArguments) {
    const { dispatch } = args;

    try {
        const { data : response }: AxiosResponse<CategoryInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/classes', 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setClasses(response));
    } catch (err) {      
        console.log(err);
    }
}
