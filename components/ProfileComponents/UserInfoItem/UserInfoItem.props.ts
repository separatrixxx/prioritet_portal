import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface UserInfoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'email' | 'phone' | 'company_name',
}
