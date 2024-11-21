import { UserInfoItemProps } from './UserInfoItem.props';
import styles from './UserInfoItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import VerifiedIcon from './verified.svg';
import InfoIcon from './info.svg';
import { Htag } from '../../Common/Htag/Htag';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { UserCompanyInfo } from '../UserCompanyInfo/UserCompanyInfo';
import { Icon } from '../../Common/Icon/Icon';
import cn from 'classnames';


export const UserInfoItem = ({ type }: UserInfoItemProps): JSX.Element => {
    const { user } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className={styles.userInfoItem}>
                <Icon type={type} />
                <Htag tag='m' className={cn(styles.userInfoText, {
                    [styles.verifiedText]: type === 'email' && user.email_verified
                        || type === 'phone' && user.phone_verified || type === 'company_name',
                    [styles.companyInfo]: type === 'company_name' && user.company_name,
                })} onClick={() => {
                    if (type === 'company_name' && user.company_name) {
                        setIsActive(true);
                    }
                }}>
                    {user[type]}
                    {
                        type === 'email' && user.email_verified
                            || type === 'phone' && user.phone_verified ?
                            <VerifiedIcon />
                        : type === 'company_name' ?
                            <InfoIcon />
                        : <></>
                    }
                </Htag>
            </div>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <UserCompanyInfo />
            </Modal>
        </>
    );
}
