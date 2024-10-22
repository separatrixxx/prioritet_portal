import axios, { AxiosResponse } from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setClasses } from "../features/classes/classesSlice";
import { ClassInterface } from "../interfaces/classes.interface";


export async function getClasses(args: BaseArguments) {
    const { dispatch } = args;

    try {
        const { data : response }: AxiosResponse<ClassInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/classes', 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        dispatch(setClasses(response.results));
    } catch (err) {      
        console.error('Get classes error: ' + err);
    }
}
