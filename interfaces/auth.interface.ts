export interface CheckAuthInterface {
    errEmail?: boolean,
    errPassword?: boolean,
    errConfirmPassword?: boolean,
    errFirstName?: boolean,
    errLastName?: boolean,
}

export interface CheckSettingsInterface extends CheckAuthInterface {
    errPhone?: boolean,
}

export interface AuthDataInterface {
    userId: number,
    accessToken: string | null,
    refreshToken: string | null,
}
