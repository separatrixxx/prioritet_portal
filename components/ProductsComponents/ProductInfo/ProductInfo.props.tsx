import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string,
    description: string,
    skladPrice?: number,
}
