import { Modal } from '../../Common/Modal/Modal';
import { useState } from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthWebButton } from '../AuthWebButton/AuthWebButton';
import { AuthMobButton } from '../AuthMobButton/AuthMobButton';


export const AuthButton = (): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <AuthWebButton setIsActive={setIsActive} />
            <AuthMobButton setIsActive={setIsActive} />
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <AuthForm setIsActive={setIsActive} />
            </Modal>
        </>
    );
};
