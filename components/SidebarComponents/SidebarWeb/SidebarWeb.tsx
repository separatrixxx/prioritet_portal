import styles from './SidebarWeb.module.css';
import { SidebarContent } from '../SidebarContent/SidebarContent';


export const SidebarWeb = (): JSX.Element => {
    return (
        <div className={styles.sidebar}>
            <SidebarContent />
        </div>
    );
};
