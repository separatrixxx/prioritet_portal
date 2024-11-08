import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductPriceBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    price: number | null,
    isMain?: boolean,
    isHovered: boolean,
}
