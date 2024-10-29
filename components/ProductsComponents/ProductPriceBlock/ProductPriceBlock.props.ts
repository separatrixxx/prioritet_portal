import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductPriceBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 'xl' | 'l' | 'm',
    price: number | null,
    isRows?: boolean,
}
