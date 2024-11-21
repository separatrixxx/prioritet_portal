import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ButtonLightProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    isLoading?: boolean,
	onClick: (e: any) => void,
}
