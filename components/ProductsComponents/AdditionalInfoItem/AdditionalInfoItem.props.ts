import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AdditionalInfoInterface } from '../../../interfaces/product.interface';


export interface AdditionalInfoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    item?: string | AdditionalInfoInterface[],
}
