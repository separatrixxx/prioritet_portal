import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CatalogItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: number,
    url: string,
    name: string,
    type: string,
    description?: string,
    price?: number | null,
    availability?: boolean | null,
}
