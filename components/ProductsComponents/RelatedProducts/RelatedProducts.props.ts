import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RelatedItem } from '../../../interfaces/product.interface';


export interface RelatedProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: string,
    title: string,
    products: RelatedItem[] | null,
}
