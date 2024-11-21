import { AuthFormProps } from './AuthForm.props';
import styles from './AuthForm.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import { CheckAuthInterface } from '../../../interfaces/auth.interface';
import { checkAuth } from '../../../helpers/check_auth.helper';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';


export const AuthForm = ({ setIsActive }: AuthFormProps): JSX.Element => {
    const { router, dispatch } = useSetup();

	const [type, setType] = useState<'login' | 'register'>('login');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const errType: CheckAuthInterface = {
		errFirstName: false,
		errLastName: false,
		errEmail: false,
		errPassword: false,
		errConfirmPassword: false,
	};

	const [error, setError] = useState<CheckAuthInterface>(errType);

    const handleAuth = () => {
        checkAuth({
            type: type,
            router: router,
            firstName: firstName,
            lastName: lastName,
            dispatch: dispatch,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            setError: setError,
            setIsLoading: setIsLoading,
            setIsActive: setIsActive,
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            handleAuth();
        }
    };

    return (
        <div className={styles.authForm} onKeyDown={handleKeyDown} tabIndex={0}>
            {
                type === 'login' ?
                    <LoginForm email={email} password={password} error={error}
                        setEmail={setEmail} setPassword={setPassword} />
                : <RegisterForm firstName={firstName} lastName={lastName} email={email}
                    password={password} confirmPassword={confirmPassword} error={error}
                    setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail}
                    setPassword={setPassword} setConfirmPassword={setConfirmPassword} />
            }
            <Button className={styles.authButton} text={setLocale(router.locale)[type]}
                isLoading={isLoading} isHeight={true} onClick={handleAuth} />
            <Htag tag='xs' className={styles.authChange}
                onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                {setLocale(router.locale)[type === 'login' ? 'create_account' : 'login_to_your_account']}
            </Htag>
        </div>
    );
};
