import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../Htag/Htag';


export const Button = ({ text, isLoading, onClick }: ButtonProps): JSX.Element => {
    return (
        <button className={styles.button} onClick={onClick}>
            {
                !isLoading ?
                    <Htag tag='s' className={styles.text}>
                        {text}
                    </Htag>
                : <div className={styles.spinner} />
            }
        </button>
    );
};
