import axios, { AxiosResponse } from "axios";
import { GetUserArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { setUser, setUserDefault } from "../features/user/userSlice";


export async function getUser(args: GetUserArguments, triedRefresh = false) {
    const { userId, accessToken, dispatch } = args;

    try {
        dispatch(setUserDefault());

        const { data: response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/users/get/${userId}/profile`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        dispatch(setUser(response));
    } catch (err) {
        if (!triedRefresh) {
            const refreshToken = localStorage.getItem('refresh_token');
            
            if (refreshToken) {
                const newAccessToken = await refreshUserToken(refreshToken);

                if (newAccessToken) {
                    getUser({
                        userId: userId,
                        accessToken: newAccessToken,
                        dispatch: dispatch,
                    }, true);
                } else {
                    localStorage.removeItem('authData');
                }
            }
        } else {
            localStorage.removeItem('authData');
        }

        console.error('Get user error: ' + err);
    }
}

export async function refreshUserToken(refreshToken: string): Promise<string | null> {
    try {
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
    }

    return null;
}
