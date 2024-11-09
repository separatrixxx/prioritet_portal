import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HeaderMobProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'main' | 'catalog' | 'favorites' | 'other',
}
