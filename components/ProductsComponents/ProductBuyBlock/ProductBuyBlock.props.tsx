import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductBuyBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: number,
}
