import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { TableDataInterface } from '../../../interfaces/table.interface';


export interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	headers: string[],
    data: TableDataInterface[][],
}
