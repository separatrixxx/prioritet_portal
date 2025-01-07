import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    productId: number,
    type: string,
    name: string,
    description: string | null,
    price: number | null,
    url: string,
    isImage?: boolean,
    isMain?: boolean,
    category?: string,
}
