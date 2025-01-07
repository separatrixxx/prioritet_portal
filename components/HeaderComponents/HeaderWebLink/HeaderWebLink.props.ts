import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HeaderWebLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    type: 'catalog' | 'profile' | 'favorites' | 'cart' | 'warehouse',
}
