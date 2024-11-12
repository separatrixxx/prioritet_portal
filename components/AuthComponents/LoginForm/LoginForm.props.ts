import { CheckAuthInterface } from "../../../interfaces/auth.interface";


export interface LoginFormProps {
    email: string,
    password: string,
    error: CheckAuthInterface,
    setEmail: (e: string) => void,
    setPassword: (e: string) => void,
}
