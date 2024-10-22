import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ProfileInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'customer' | 'manager',
}
