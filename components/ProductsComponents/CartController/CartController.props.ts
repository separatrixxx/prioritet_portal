import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CartControllerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: number,
    isCart?: boolean,
    setIsCart: (e: boolean) => void,
}
