import { AuthMobButtonProps } from './AuthMobButton.props';
import styles from './AuthMobButton.module.css';
import { useSetup } from '../../../hooks/useSetup';
import ArrowIcon from './arrow.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const AuthMobButton = ({ setIsActive }: AuthMobButtonProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.authButton} onClick={() => setIsActive(true)}>
            <Htag tag='xxl' className={styles.authButtonText}>
                {setLocale(router.locale).login}
            </Htag>
            <ArrowIcon />
        </div>
    );
};
