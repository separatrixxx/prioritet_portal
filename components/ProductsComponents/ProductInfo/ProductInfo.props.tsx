import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductById } from '../../../interfaces/product.interface';


export interface ProductInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductById,
}
