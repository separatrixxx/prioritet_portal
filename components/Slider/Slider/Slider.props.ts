import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string,
	images: string[],
}
