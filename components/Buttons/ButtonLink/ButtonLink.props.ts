import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ButtonLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    text: string,
    url: string,
}
