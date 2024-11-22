import styles from './ProfileSettings.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { Icon } from '../../Common/Icon/Icon';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Inputs/Input/Input';
import { CheckSettingsInterface } from '../../../interfaces/auth.interface';
import { Button } from '../../Buttons/Button/Button';
import { checkEditUser } from '../../../helpers/edit_user.helper';
import { Toggle } from '../../Common/Toggle/Toggle';
import SettingsIcon from './settings.svg';
import { logOutUser } from '../../../helpers/auth.helper';


export const ProfileSettings = (): JSX.Element => {
    const { router, dispatch, user } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    const [firstName, setFirstName] = useState<string>(user.first_name);
    const [lastName, setLastName] = useState<string>(user.last_name);
    const [middleName, setMiddleName] = useState<string>(user.middle_name || '');
    const [email, setEmail] = useState<string>(user.email);
    const [phone, setPhone] = useState<string>(user.phone || '');
    const [companyName, setCompanyName] = useState<string>(user.company_name || '');
    const [companyInn, setCompanyInn] = useState<string>(user.company_inn || '');
    const [companyKpp, setCompanyKpp] = useState<string>(user.company_kpp || '');
    const [companyAddress, setCompanyAddress] = useState<string>(user.company_address || '');
    const [position, setPosition] = useState<string>(user.position || '');
    const [notificationsEmail, setNotificationsEmail] = useState<boolean>(false);
    const [notificationsPhone, setNotificationsPhone] = useState<boolean>(false);

    const errType: CheckSettingsInterface = {
        errFirstName: false,
        errLastName: false,
        errEmail: false,
        errPhone: false,
    };

    const [error, setError] = useState<CheckSettingsInterface>(errType);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleEditUser = () => {
        checkEditUser({
            userId: user.id,
            router: router,
            dispatch: dispatch,
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            email: email,
            phone: phone,
            companyName: companyName,
            companyInn: companyInn,
            companyKpp: companyKpp,
            companyAddress: companyAddress,
            position: position,
            notificationsEmail: notificationsEmail,
            notificationsPhone: notificationsPhone,
            setError: setError,
            setIsLoading: setIsLoading,
            setIsActive: setIsActive,
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            handleEditUser();
        }
    };

    return (
        <>
            <SettingsIcon className={styles.settingsButton} onClick={() => setIsActive(true)} />
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <div className={styles.profileSettings} onKeyDown={handleKeyDown} tabIndex={0}>
                    <Htag tag='l' className={styles.settingsTitle}>
                        {setLocale(router.locale).settings}
                    </Htag>
                    <Htag tag='s' className={styles.settingsText}>
                        {setLocale(router.locale).personal_data}
                    </Htag>
                    <Input type='text' text={setLocale(router.locale).first_name}
                        value={firstName} isError={error.errFirstName} isHeight={true}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <Input type='text' text={setLocale(router.locale).last_name}
                        value={lastName} isError={error.errLastName} isHeight={true}
                        onChange={(e) => setLastName(e.target.value)} />
                    <Input type='text' text={setLocale(router.locale).middle_name}
                        value={middleName} isHeight={true}
                        onChange={(e) => setMiddleName(e.target.value)} />
                    <Htag tag='s' className={styles.settingsText}>
                        {setLocale(router.locale).contact_details}
                    </Htag>
                    <Input type='email' text={setLocale(router.locale).email}
                        value={email} isError={error.errEmail} isHeight={true}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Input type='phone' text={setLocale(router.locale).phone}
                        value={phone} isError={error.errPhone} isHeight={true}
                        onChange={(e) => setPhone(e.target.value)} />
                    <Htag tag='s' className={styles.settingsText}>
                        {setLocale(router.locale).company_info}
                    </Htag>
                    <Input type='text' text={setLocale(router.locale).company_name}
                        value={companyName} isHeight={true}
                        onChange={(e) => setCompanyName(e.target.value)} />
                    <Input type='text' text={setLocale(router.locale).company_inn}
                        value={companyInn} isHeight={true}
                        onChange={(e) => setCompanyInn(e.target.value)} />
                    <Input type='text' text={setLocale(router.locale).company_kpp}
                        value={companyKpp} isHeight={true}
                        onChange={(e) => setCompanyKpp(e.target.value)} />
                    <Input type='text' text={setLocale(router.locale).company_address}
                        value={companyAddress} isHeight={true}
                        onChange={(e) => setCompanyAddress(e.target.value)} />
                    <Input type='text' text={setLocale(router.locale).position}
                        value={position} isHeight={true}
                        onChange={(e) => setPosition(e.target.value)} />
                    {/* <Htag tag='s' className={styles.settingsText}>
                        {setLocale(router.locale).notifications}
                    </Htag> */}
                    {/* <Toggle className={styles.emailToggle} text={setLocale(router.locale).email}
                        checked={notificationsEmail} toggleChecked={setNotificationsEmail} />
                    <Toggle text={setLocale(router.locale).sms} checked={notificationsPhone}
                        toggleChecked={setNotificationsPhone} /> */}
                    <Button className={styles.editUserButton} text={setLocale(router.locale).save}
                        isLoading={isLoading} isHeight={true} onClick={handleEditUser} />
                    <Button className={styles.logOutButton} text={setLocale(router.locale).log_out}
                        isLoading={isLoading} isHeight={true} onClick={() => logOutUser(router, {
                            dispatch: dispatch,
                        })} />
                </div>
            </Modal>
        </>
    );
}
