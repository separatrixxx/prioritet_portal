import axios, { AxiosResponse } from "axios";
import { SearchInterface } from "../interfaces/search.interface";


export async function globalSearch(query: string): Promise<SearchInterface[]> {
    try {
        const { data }: AxiosResponse<SearchInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/search/global?limit=1000&offset=0&q=${query}`, 
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });
        return data;
    } catch (err) {
        console.error("Search error: " + err);

        return [];
    }
}
