import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'email' | 'phone' | 'company_name' | 'settings',
	onClick?: (e: any) => void,
}
