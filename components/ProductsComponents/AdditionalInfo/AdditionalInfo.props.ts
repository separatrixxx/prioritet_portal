import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductById } from '../../../interfaces/product.interface';


export interface AdditionalInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductById,
}
