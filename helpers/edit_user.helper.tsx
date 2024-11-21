import axios from "axios";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { AuthDataInterface, CheckSettingsInterface } from "../interfaces/auth.interface";
import { EditUserArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { getUser } from "./user.helper";
import { formatPhone } from "./format.helper";


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PHONE_REGEXP = /^[\+]?[7|8]?[\s]?[(]?[0-9]{3}[)]?[\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/iu;

export function checkEditUser(args: EditUserArguments) {
    const { userId, router, dispatch, firstName, middleName, lastName, email, phone, companyName,
        companyInn, companyKpp, companyAddress, position, notificationsEmail, notificationsPhone,
        setError, setIsLoading, setIsActive } = args;

    let checkEdit: CheckSettingsInterface = {
        errFirstName: false,
        errLastName: false,
        errEmail: false,
        errPhone: false,
    };

    setError(checkEdit);
    setIsLoading(true);

    if (firstName.trim() && lastName.trim() && EMAIL_REGEXP.test(email)
        && (PHONE_REGEXP.test(phone) || !phone)) {
        editUser({
            userId: userId,
            router: router,
            dispatch: dispatch,
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            email: email,
            phone: phone,
            companyName: companyName,
            companyInn: companyInn,
            companyKpp: companyKpp,
            companyAddress: companyAddress,
            position: position,
            notificationsEmail: notificationsEmail,
            notificationsPhone: notificationsPhone,
            setError: setError,
            setIsLoading: setIsLoading,
            setIsActive: setIsActive,
        });
    } else {
        if (!firstName.trim()) {
            checkEdit.errFirstName = true;

            ToastError(setLocale(router.locale).auth_errors.error_first_name);
        }

        if (!lastName.trim()) {
            checkEdit.errLastName = true;

            ToastError(setLocale(router.locale).auth_errors.error_last_name);
        }

        if (!EMAIL_REGEXP.test(email)) {
            checkEdit.errEmail = true;

            ToastError(setLocale(router.locale).auth_errors.error_email);
        }

        if (phone && !PHONE_REGEXP.test(phone)) {
            checkEdit.errPhone = true;

            ToastError(setLocale(router.locale).auth_errors.error_phone);
        }

        setIsLoading(false);
    }
}

export async function editUser(args: EditUserArguments) {
    const { userId, router, dispatch, firstName, middleName, lastName, email, phone, companyName,
        companyInn, companyKpp, companyAddress, position, notificationsEmail, notificationsPhone,
        setIsLoading, setIsActive } = args;

    const localAuthData = localStorage.getItem('authData');
    let authData: AuthDataInterface | null = null;

    if (localAuthData) {
        authData = JSON.parse(localAuthData);
    }

    try {
        await axios.patch(process.env.NEXT_PUBLIC_DOMAIN +
            '/users/update/' + userId, {
            email: email,
            first_name: firstName,
            last_name: lastName,
            middle_name: middleName,
            phone: formatPhone(phone),
            company_name: companyName,
            company_inn: companyInn,
            company_kpp: companyKpp,
            company_address: companyAddress,
            position: position,
            notification_settings: {
                email: notificationsEmail,
                sms: notificationsPhone
            }
        }, {
            headers: {
                Authorization: `Bearer ${authData?.accessToken}`,
            },
        }).then(() => {
            setIsLoading(false);
            setIsActive(false);

            ToastSuccess(setLocale(router.locale).info_updated);

            if (authData?.accessToken) {
                getUser({
                    userId: authData.userId,
                    accessToken: authData.accessToken,
                    dispatch: dispatch,
                });
            }
        });
    } catch (err: any) {
        ToastError(setLocale(router.locale).auth_errors.error_edit_info);
        setIsLoading(false);

        console.error('Register user error: ' + err);
    }
}
