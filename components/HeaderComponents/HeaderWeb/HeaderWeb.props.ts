import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HeaderWebProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'main' | 'catalog' | 'product' | 'favorites' | 'other',
}
