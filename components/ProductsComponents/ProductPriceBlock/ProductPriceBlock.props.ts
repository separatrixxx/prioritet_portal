import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductPriceBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 'xl' | 'l',
    price: number | null,
}
