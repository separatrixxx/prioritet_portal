import { InputWithEyeProps } from './InputWithEye.props';
import styles from './InputWithEye.module.css';
import Eye from './eye.svg';
import ClosedEye from './eyeClosed.svg';
import cn from 'classnames';


export const InputWithEye = ({ children, isActive, onClick }: InputWithEyeProps): JSX.Element => {
    let EyeIcon = ClosedEye;

    if (isActive) {
        EyeIcon = Eye;
    }

    return (
        <label className={styles.label}>
            {children}
            <span className={cn(styles.icon, {
                [styles.activeIcon]: isActive,
            })}
                onClick={onClick}>
                <EyeIcon />
            </span>
        </label>
    );
};