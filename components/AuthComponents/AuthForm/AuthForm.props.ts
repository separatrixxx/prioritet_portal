import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface AuthFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setIsActive: (e: boolean) => void,
}