import { ReactNode } from 'react';

export interface InputWithEyeProps {
	children: ReactNode,
	isActive: boolean,
	onClick: (e: any) => void,
}