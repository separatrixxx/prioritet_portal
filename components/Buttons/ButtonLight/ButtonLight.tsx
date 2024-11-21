import { ButtonLightProps } from './ButtonLight.props';
import styles from './ButtonLight.module.css';
import { Htag } from '../../Common/Htag/Htag';


export const ButtonLight = ({ text, isLoading, onClick }: ButtonLightProps): JSX.Element => {
    return (
        <button className={styles.buttonLight} onClick={onClick}>
            {
                !isLoading ?
                    <Htag tag='s'>
                        {text}
                    </Htag>
                : <div className={styles.spinner} />
            }
        </button>
    );
};
