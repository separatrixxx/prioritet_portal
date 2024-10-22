import styles from './Footer.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { setFooterYear } from '../../../helpers/footer_year.helper';
import { ByBlock } from '../ByBlock/ByBlock';


export const Footer = (): JSX.Element => {
    const { router } = useSetup();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerDiv}>
                <Htag tag='s' className={styles.name}>
                    {'© ' + setFooterYear(2024) + ' ' + setLocale(router.locale).prioritet_portal}
                </Htag>
                <Htag tag='s'>
                    {setLocale(router.locale).offer}
                </Htag>
                <Htag tag='s'>
                    {setLocale(router.locale).privacy_policy}
                </Htag>
            </div>
            <ByBlock color='light' />
        </footer>
    );
};
