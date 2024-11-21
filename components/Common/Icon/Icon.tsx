import { IconProps } from './Icon.props';
import styles from './Icon.module.css';
import EmailIcon from './email.svg';
import PhoneIcon from './phone.svg';
import CompanyIcon from './company.svg';
import SettingsIcon from './settings.svg';
import cn from 'classnames';


export const Icon = ({ type, onClick }: IconProps): JSX.Element => {
    let UserInfoIcon = EmailIcon;

    if (type === 'email') {
        UserInfoIcon = EmailIcon;
    } else if (type === 'phone') {
        UserInfoIcon = PhoneIcon;
    } else if (type === 'company_name') {
        UserInfoIcon = CompanyIcon;
    } else {
        UserInfoIcon = SettingsIcon;
    }

    return (
        <div className={cn(styles.icon, {
            [styles.iconButton]: onClick,
        })} onClick={onClick ? onClick : () => {}}>
            <div />
            <UserInfoIcon />
        </div>
    );
}
