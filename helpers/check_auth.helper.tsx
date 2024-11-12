import { ToastError } from "../components/Common/Toast/Toast";
import { CheckAuthInterface } from "../interfaces/auth.interface";
import { CheckAuthArguments, LoginArguments, RegisterArguments } from "../interfaces/refactor.interface";
import { loginUser, registerUser } from "./auth.helper";
import { setLocale } from "./locale.helper";


export function checkAuth(args: CheckAuthArguments) {
    const { type, router, dispatch, firstName, lastName, email, password, confirmPassword,
        setError, setIsLoading, setIsActive } = args;

    let checkAuth: CheckAuthInterface = {
        errFirstName: false,
        errLastName: false,
        errEmail: false,
        errPassword: false,
        errConfirmPassword: false,
    };

    setError(checkAuth);
    setIsLoading(true);

    if (type === 'login') {
        checkLogin(checkAuth, {
            router: router,
            dispatch: dispatch,
            email: email,
            password: password,
            setError: setError,
            setIsLoading: setIsLoading,
        });
    } else {
        checkRegister(checkAuth, {
            router: router,
            dispatch: dispatch,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            setError: setError,
            setIsLoading: setIsLoading,
            setIsActive: setIsActive,
        });
    }
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function checkLogin(checkAuth: CheckAuthInterface, args: LoginArguments) {
    const { router, dispatch, email, password, setError, setIsLoading } = args;

    if (EMAIL_REGEXP.test(email) && password.length >= 8 && password.length <= 32) {
        loginUser({
            router: router,
            dispatch: dispatch,
            email: email,
            password: password,
            setError: setError,
            setIsLoading: setIsLoading,
        });
    } else {
        if (!EMAIL_REGEXP.test(email)) {
            checkAuth.errEmail = true;

            ToastError(setLocale(router.locale).auth_errors.error_email);
        }

        if (password.length < 8 || password.length > 32) {
            checkAuth.errPassword = true;

            ToastError(setLocale(router.locale).auth_errors.error_password);
        }

        setIsLoading(false);
    }
}

export function checkRegister(checkAuth: CheckAuthInterface, args: RegisterArguments) {
    const { router, dispatch, firstName, lastName, email, password, confirmPassword,
        setError, setIsLoading, setIsActive } = args;

    if (firstName.trim() && lastName.trim() && EMAIL_REGEXP.test(email)&& password.length >= 8
        && password.length <= 32 && password === confirmPassword) {
        registerUser({
            router: router,
            dispatch: dispatch,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            setError: setError,
            setIsLoading: setIsLoading,
            setIsActive: setIsActive,
        });
    } else {
        if (!firstName.trim()) {
            checkAuth.errFirstName = true;

            ToastError(setLocale(router.locale).auth_errors.error_first_name);
        }

        if (!lastName.trim()) {
            checkAuth.errLastName = true;

            ToastError(setLocale(router.locale).auth_errors.error_last_name);
        }

        if (!EMAIL_REGEXP.test(email)) {
            checkAuth.errEmail = true;

            ToastError(setLocale(router.locale).auth_errors.error_email);
        }

        if (password.length < 8 || password.length > 32) {
            checkAuth.errPassword = true;

            ToastError(setLocale(router.locale).auth_errors.error_password);
        }

        if (password !== confirmPassword) {
            checkAuth.errConfirmPassword = true;

            ToastError(setLocale(router.locale).auth_errors.error_confirm);
        }

        setIsLoading(false);
    }
}
