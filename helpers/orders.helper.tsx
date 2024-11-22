import axios, { AxiosResponse } from "axios";
import { BaseArguments, CreateOrderArguments } from "../interfaces/refactor.interface";
import { getUserCart } from "./cart.helper";
import { AuthDataInterface } from "../interfaces/auth.interface";
import { setOrders, setOrdersDefault } from "../features/orders/ordersSlice";
import { OrdersInterface } from "../interfaces/orders.interface";


export async function createOrder(args: CreateOrderArguments) {
    const { userId, cartId, dispatch } = args;

    try {
        const localAuthData = localStorage.getItem('authData');
        let authData: AuthDataInterface | null = null;
    
        if (localAuthData) {
            authData = JSON.parse(localAuthData);
        }
    
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/cart/${cartId}/convert-to-order`, {},
            {
                headers: {
                    Authorization: `Bearer ${authData?.accessToken}`,
                },
            });

        getUserCart({
            userId: userId,
            accessToken: authData?.accessToken || null,
            dispatch: dispatch,
        });
    } catch (err) {
        console.error('Create order error: ' + err);
    }
}

export async function getUserOrders(args: BaseArguments) {
    const { dispatch } = args;

    try {
        dispatch(setOrdersDefault());

        const localAuthData = localStorage.getItem('authData');
        let authData: AuthDataInterface | null = null;
    
        if (localAuthData) {
            authData = JSON.parse(localAuthData);
        }
        
        const { data: response }: AxiosResponse<OrdersInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/users/get/${authData?.userId}/orders`,
            {
                headers: {
                    Authorization: `Bearer ${authData?.accessToken}`,
                },
            });

        dispatch(setOrders(response));
    } catch (err) {
        console.error('Get user orders error: ' + err);
    }
}
