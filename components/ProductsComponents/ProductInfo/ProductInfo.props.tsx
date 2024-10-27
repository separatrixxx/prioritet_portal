import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductById, CommonProductById } from '../../../interfaces/product.interface';


export interface ProductInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product?: ProductById,
    commonProduct?: CommonProductById,
}
