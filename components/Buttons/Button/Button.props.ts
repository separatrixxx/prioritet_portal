import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    isLoading?: boolean,
    isSmall?: boolean,
	onClick: (e: any) => void,
}
