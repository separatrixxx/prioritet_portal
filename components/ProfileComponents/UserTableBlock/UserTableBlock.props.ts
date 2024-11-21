import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TableDataInterface } from '../../../interfaces/table.interface';


export interface UserTableBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'orders' | 'users' | 'products',
    title: string,
    headers: string[],
    data: TableDataInterface[][],
}
