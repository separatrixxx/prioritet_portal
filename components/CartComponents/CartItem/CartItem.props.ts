import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface CartItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    productId: number,
    name: string,
    price: number | null,
    url: string,
}
