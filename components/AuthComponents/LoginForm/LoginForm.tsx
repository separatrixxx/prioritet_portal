import { LoginFormProps } from './LoginForm.props';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Inputs/Input/Input';
import { useState } from 'react';
import { InputWithEye } from '../../Inputs/InputWithEye/InputWithEye';


export const LoginForm = ({ email, password, error, setEmail, setPassword }: LoginFormProps): JSX.Element => {
    const { router } = useSetup();

    const [pswdType, setPswdType] = useState<'password' | 'text'>('password');

    return (
        <>
            <Input type='email' text={setLocale(router.locale).email}
                value={email} isError={error.errEmail} isHeight={true}
                onChange={(e) => setEmail(e.target.value)} />
            <InputWithEye isActive={pswdType === 'text'}
                onClick={() => setPswdType(pswdType === 'text' ? 'password' : 'text')}>
                <Input type={pswdType} text={setLocale(router.locale).password}
                    value={password} isError={error.errPassword} isHeight={true}
                    isEye={true} onChange={(e) => setPassword(e.target.value)} />
            </InputWithEye>
        </>
    );
};
