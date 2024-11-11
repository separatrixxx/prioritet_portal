import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const Button = ({ text, isLoading, isSmall, isPrimary, isHeight, onClick }: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, {
            [styles.buttonPrimary]: isPrimary,
            [styles.heightCart]: isHeight,
        })} onClick={onClick}>
            {
                !isLoading ?
                    <Htag tag={!isSmall ? 'm' : 's'} className={styles.text}>
                        {text}
                    </Htag>
                : <div className={styles.spinner} />
            }
        </button>
    );
};
