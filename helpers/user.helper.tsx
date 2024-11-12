import axios, { AxiosResponse } from "axios";
import { BaseArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { setUser, setUserDefault } from "../features/user/userSlice";


export async function getUser(accessToken: string, args: BaseArguments, triedRefresh = false) {
    const { dispatch } = args;

    try {
        dispatch(setUserDefault());

        const { data: response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/users/get/2/profile',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        dispatch(setUser(response));
    } catch (err) {
        console.error('Get user error: ' + err);

        if (!triedRefresh) {
            const refreshToken = localStorage.getItem('refresh_token');
            
            if (refreshToken) {
                const newAccessToken = await refreshUserToken(refreshToken, args);

                if (newAccessToken) {
                    return getUser(newAccessToken, args, true);
                }
            }
        }

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }
}

export async function refreshUserToken(refreshToken: string, args: BaseArguments): Promise<string | null> {
    const { dispatch } = args;

    try {
        dispatch(setUserDefault());

        const response = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/auth/refresh', {
            refresh_token: refreshToken
        });

        if (response.data.new_access_token) {
            const newAccessToken = response.data.new_access_token;
            localStorage.setItem('access_token', newAccessToken);

            return newAccessToken;
        }
    } catch (err: any) {
        if (err.response?.data?.error_code !== 'USER_EXISTS') {
            console.error('Refresh token error: ' + err);
        }

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

    return null;
}
