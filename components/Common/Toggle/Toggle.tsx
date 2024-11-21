import { ToggleProps } from './Toggle.props';
import styles from './Toggle.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const Toggle = ({ text, checked, className, toggleChecked }: ToggleProps): JSX.Element => {
    const handleToggle = () => {
        toggleChecked(!checked);
    };

    return (
        <div className={cn(styles.toggleWrapper, className)}>
            <div className={cn(styles.toggle, {
                [styles.toggleChecked]: checked,
                [styles.toggleChecked]: checked,
            })} onClick={handleToggle}>
                <div className={styles.toggleThumb} />
            </div>
            <Htag tag='s' className={styles.toggleText}>
                {text}
            </Htag>
        </div>
    );
};
