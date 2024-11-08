import { HeaderProps } from './Header.props';
import { HeaderWeb } from '../HeaderWeb/HeaderWeb';
import { HeaderMob } from '../HeaderMob/HeaderMob';


export const Header = ({ type }: HeaderProps): JSX.Element => {
    return (
        <>
            <HeaderWeb type={type} />
            <HeaderMob type={type} />
        </>
    );
};
