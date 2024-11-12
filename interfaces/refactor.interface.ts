import { CheckAuthInterface } from "./auth.interface";
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
    Pick<CheckAuthArguments, 'router' | 'dispatch' | 'email' | 'password' | 'setError' | 'setIsLoading'> {};

export interface RegisterArguments extends
    Omit<CheckAuthArguments, 'type'> {};
