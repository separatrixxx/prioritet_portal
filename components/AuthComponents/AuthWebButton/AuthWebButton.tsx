import { AuthWebButtonProps } from './AuthWebButton.props';
import styles from './AuthWebButton.module.css';
import { useSetup } from '../../../hooks/useSetup';
import ProfileIcon from './profile.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const AuthWebButton = ({ setIsActive }: AuthWebButtonProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.authButton} onClick={() => setIsActive(true)}>
            <ProfileIcon />
            <Htag tag='s' className={styles.authButtonText}>
                {setLocale(router.locale).login}
            </Htag>
        </div>
    );
};
