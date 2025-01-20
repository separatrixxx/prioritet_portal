import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ToggleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    checked: boolean,
    toggleChecked: (e: boolean) => void,
}
