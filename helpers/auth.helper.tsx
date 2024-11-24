import { BaseArguments, LoginArguments, RegisterArguments } from "../interfaces/refactor.interface";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";
import axios from "axios";
import { setUserDefault } from "../features/user/userSlice";
import { AuthDataInterface } from "../interfaces/auth.interface";
import { setCartDefault } from "../features/cart/cartSlice";
import { assignCart, getGuestCart, getUserCart } from "./cart.helper";
import { getGuestId } from "./guest.helper";
import { getUser } from "./user.helper";


export async function loginUser(args: LoginArguments) {
    const { router, dispatch, email, password, setError, setIsLoading } = args;

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/auth/login', {
            email: email,
            password: password
        }).then(r => {
            setIsLoading(false);

            const authData: AuthDataInterface = {
                userId: r.data.id,
                accessToken: r.data.access_token,
                refreshToken: r.data.refresh_token,
            }

            assignCart({
                userId: authData.userId,
                accessToken: authData.accessToken,
            });

            getUser({
                userId: authData.userId,
                accessToken: authData.accessToken,
                refreshToken: authData.refreshToken,
                dispatch: dispatch,
            });

            getUserCart({
                userId: authData.userId,
                accessToken: authData.accessToken,
                dispatch: dispatch,
            });

            localStorage.removeItem('guestId');
            localStorage.setItem('authData', JSON.stringify(authData));
        });
    } catch (err: any) {
        if (err.response.data && err.response.data.error_code === 'USER_NOT_FOUND') {
            setError({
                errEmail: true,
            });

            ToastError(setLocale(router.locale).auth_errors.error_not_found);
        } else if (err.response.data && err.response.data.error_code === 'INVALID_CREDENTIALS') {
            setError({
                errPassword: true,
            });

            ToastError(setLocale(router.locale).auth_errors.error_incorrect_password);
        } else if (err.response.data && err.response.data.error_code === 'ACCOUNT_PENDING_APPROVAL') {
             ToastError(setLocale(router.locale).auth_errors.error_verify);
        } else {
            ToastError(setLocale(router.locale).auth_errors.error_login);
        }

        setIsLoading(false);

        console.error('Login user error: ' + err);
    }
}

export async function registerUser(args: RegisterArguments) {
    const { router, firstName, lastName, email, password,
        setError, setIsLoading, setType } = args;

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/auth/register', {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
        }).then(() => {
            setIsLoading(false);
            setType('login');
            
            ToastSuccess(setLocale(router.locale).you_have_successfully_registered);
        });
    } catch (err: any) {
        if (err.response.data && err.response.data.error_code === 'USER_EXISTS') {
            setError({
                errEmail: true,
            });

            ToastError(setLocale(router.locale).auth_errors.error_user_exists);
        } else {
            ToastError(setLocale(router.locale).auth_errors.error_register);
        }

        setIsLoading(false);

        console.error('Register user error: ' + err);
    }
}

export function logOutUser(router: any, args: BaseArguments) {
    const { dispatch } = args;
    
    router.reload();

    dispatch(setUserDefault());
    dispatch(setCartDefault());

    getGuestId({
        dispatch: dispatch,
    });

    localStorage.removeItem('authData');
}
