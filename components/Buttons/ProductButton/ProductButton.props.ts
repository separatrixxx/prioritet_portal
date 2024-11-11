import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProductButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: 'favorite' | 'buy' | 'remove',
    flag?: boolean,
    isHovered?: boolean,
    size?: 'l' | 's',
    onClick: (e: any) => void,
}
