import { CheckAuthInterface } from "../../../interfaces/auth.interface";


export interface RegisterFormProps {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    error: CheckAuthInterface,
    setFirstName: (e: string) => void,
    setLastName: (e: string) => void,
    setEmail: (e: string) => void,
    setPassword: (e: string) => void,
    setConfirmPassword: (e: string) => void,
}
