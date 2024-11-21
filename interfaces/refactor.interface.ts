import { CheckAuthInterface } from "./auth.interface";
import { CartByIdInterface, CartIdItem } from "./cart.interface";
import { FiltersInterface } from "./filters.interface";

export interface BaseArguments {
    dispatch: any,
}

export interface GetProductsArguments extends BaseArguments {
    filters: FiltersInterface,
}

export interface CheckAuthArguments extends BaseArguments {
    type: 'login' | 'register',
    router: any,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    setError: (e: CheckAuthInterface) => void,
    setIsLoading: (e: boolean) => void,
    setIsActive: (e: boolean) => void,
}

export interface LoginArguments extends
    Pick<CheckAuthArguments, 'router' | 'dispatch' | 'email' | 'password' | 'setError' | 'setIsLoading'> { };

export interface RegisterArguments extends Omit<CheckAuthArguments, 'type'> { };

export interface EditUserArguments extends Omit<RegisterArguments, 'password' | 'confirmPassword'> {
    userId: number,
    middleName: string,
    phone: string,
    companyName: string,
    companyInn: string,
    companyKpp: string,
    companyAddress: string,
    position: string,
    notificationsEmail: boolean,
    notificationsPhone: boolean,
};

export interface GetUserArguments extends BaseArguments {
    userId: number,
    accessToken: string | null,
}

export interface CartAddArguments extends BaseArguments {
    productId: number,
    cart: CartByIdInterface,
}

export interface UpdateCartArguments extends BaseArguments {
    cartId: number,
    items: CartIdItem[],
}
