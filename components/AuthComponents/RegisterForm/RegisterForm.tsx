import { RegisterFormProps } from './RegisterForm.props';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Inputs/Input/Input';
import { useState } from 'react';
import { InputWithEye } from '../../Inputs/InputWithEye/InputWithEye';


export const RegisterForm = ({ firstName, lastName, email, password, confirmPassword, error,
    setFirstName, setLastName, setEmail, setPassword, setConfirmPassword }: RegisterFormProps): JSX.Element => {
    const { router } = useSetup();

    const [pswdType, setPswdType] = useState<'password' | 'text'>('password');
    const [pswdConfType, setPswdConfType] = useState<'password' | 'text'>('password');

    return (
        <>
            <Input type='text' text={setLocale(router.locale).first_name}
                value={firstName} isError={error.errFirstName} isHeight={true}
                onChange={(e) => setFirstName(e.target.value)} />
            <Input type='text' text={setLocale(router.locale).last_name}
                value={lastName} isError={error.errLastName} isHeight={true}
                onChange={(e) => setLastName(e.target.value)} />
            <Input type='email' text={setLocale(router.locale).email}
                value={email} isError={error.errEmail} isHeight={true}
                onChange={(e) => setEmail(e.target.value)} />
            <InputWithEye isActive={pswdType === 'text'}
                onClick={() => setPswdType(pswdType === 'text' ? 'password' : 'text')}>
                <Input type={pswdType} text={setLocale(router.locale).password}
                    value={password} isError={error.errPassword} isHeight={true}
                    isEye={true} onChange={(e) => setPassword(e.target.value)} />
            </InputWithEye>
            <InputWithEye isActive={pswdConfType === 'text'}
                onClick={() => setPswdConfType(pswdConfType === 'text' ? 'password' : 'text')}>
                <Input type={pswdConfType} text={setLocale(router.locale).confirm_password}
                    value={confirmPassword} isError={error.errConfirmPassword} isHeight={true}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </InputWithEye>
        </>
    );
};
