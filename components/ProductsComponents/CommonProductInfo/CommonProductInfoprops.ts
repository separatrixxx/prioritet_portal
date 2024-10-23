import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CommonProductById } from '../../../interfaces/product.interface';


export interface CommonProductInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: CommonProductById,
}
