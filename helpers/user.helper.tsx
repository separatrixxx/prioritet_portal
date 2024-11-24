import axios, { AxiosResponse } from "axios";
import { GetUserArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { AuthDataInterface } from "../interfaces/auth.interface";


export async function getUser(args: GetUserArguments, triedRefresh = false) {
    const { userId, accessToken, refreshToken, dispatch } = args;

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
            if (refreshToken) {
                const newAccessToken = await refreshUserToken(userId, refreshToken);

                if (newAccessToken) {
                    getUser({
                        userId: userId,
                        accessToken: newAccessToken,
                        refreshToken: refreshToken,
                        dispatch: dispatch,
                    }, true);
                } else {
                    localStorage.removeItem('authData');

                    console.error('Refresh token has expired: ' + err);
                }
            }
        } else {
            localStorage.removeItem('authData');

            console.error('Get user error: ' + err);
        }
    }
}

export async function refreshUserToken(userId: number, refreshToken: string): Promise<string | null> {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/auth/refresh', {
            refresh_token: refreshToken
        });

        if (response.data.new_access_token) {
            const newAccessToken = response.data.new_access_token;

            const authData: AuthDataInterface = {
                userId: userId,
                accessToken: newAccessToken,
                refreshToken: refreshToken,
            }
            
            localStorage.setItem('authData', JSON.stringify(authData));

            return newAccessToken;
        }
    } catch (err: any) {
        if (err.response?.data?.error_code !== 'USER_EXISTS') {
            console.error('Refresh token error: ' + err);
        }
    }

    return null;
}
