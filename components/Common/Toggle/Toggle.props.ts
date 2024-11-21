import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ToggleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    checked: boolean,
    toggleChecked: (checked: boolean) => void,
}
