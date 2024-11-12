import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface AuthWebButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setIsActive: (e: boolean) => void,
}
