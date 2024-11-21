import axios, { AxiosResponse } from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { getGuestCart } from "./cart.helper";


export async function getGuestId(args: BaseArguments) {
    const { dispatch } = args;

    try {       
        const { data: response }: AxiosResponse<{ guestId: string }> = await axios.get('/api/getGuestId');

        localStorage.setItem('guestId', response.guestId);

        getGuestCart(response.guestId, {
            dispatch: dispatch,
        });
    } catch (err) {
        console.error('Get guest id error: ' + err);
    }
}
