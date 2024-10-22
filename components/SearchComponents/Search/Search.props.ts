import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	text: string,
	value: string,
	onChange: (e: any) => void,
}
