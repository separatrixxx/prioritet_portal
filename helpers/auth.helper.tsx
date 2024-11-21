import { BaseArguments, LoginArguments, RegisterArguments } from "../interfaces/refactor.interface";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { setLocale } from "./locale.helper";
import axios from "axios";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { AuthDataInterface } from "../interfaces/auth.interface";
import { setCartDefault } from "../features/cart/cartSlice";
import { getUserCart } from "./cart.helper";
import { getGuestId } from "./guest.helper";


export async function loginUser(args: LoginArguments) {
    const { router, dispatch, email, password, setError, setIsLoading } = args;

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/auth/login', {
            email: email,
            password: password
        }).then(r => {
            setIsLoading(false);
            dispatch(setUser(r.data));

            const authData: AuthDataInterface = {
                userId: r.data.id,
                accessToken: r.data.access_token,
                refreshToken: r.data.refresh_token,
            }

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
        setError, setIsLoading, setIsActive } = args;

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/auth/register', {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
        }).then(() => {
            setIsLoading(false);
            setIsActive(false);
            
            ToastSuccess(setLocale(router.locale).confirmation_letter_sent_to_email);
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

export function logOutUser(args: BaseArguments) {
    const { dispatch } = args;

    dispatch(setUserDefault());
    dispatch(setCartDefault());

    getGuestId({
        dispatch: dispatch,
    });

    localStorage.removeItem('authData');
}
