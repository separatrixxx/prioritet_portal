import styles from './UserInfoBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { UserInfoItem } from '../UserInfoItem/UserInfoItem';


export const UserInfoBar = (): JSX.Element => {
    const { user } = useSetup();

    return (
        <div className={styles.userInfoBar}>
            <UserInfoItem type='email' />
            {
                user.phone ?
                    <UserInfoItem type='phone' />
                : <></>
            }
            {
                user.company_name ?
                    <UserInfoItem type='company_name' />
                : <></>
            }
        </div>
    );
}
