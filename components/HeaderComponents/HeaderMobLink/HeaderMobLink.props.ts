import { DetailedHTMLProps, HTMLAttributes, MouseEvent } from 'react';


export interface HeaderMobLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    link: 'main' | 'catalog' | 'profile' | 'favorites' | 'cart',
    isFirst?: boolean,
    onClick: (event: MouseEvent<HTMLAnchorElement>) => void,
}
