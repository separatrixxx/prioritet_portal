import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CommonProductById, ProductById } from '../../interfaces/product.interface';


export interface ProductPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product?: ProductById,
    commonProduct?: CommonProductById,
}
