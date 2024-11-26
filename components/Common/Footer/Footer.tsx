import styles from './Footer.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { setFooterYear } from '../../../helpers/footer_year.helper';
import Link from 'next/link';
import cn from 'classnames';


export const Footer = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <footer className={styles.footer}>
            <Htag tag='s' className={styles.footerText}>
                {'© ' + setFooterYear(2024) + ' ' + setLocale(router.locale).prioritet_portal}
            </Htag>
            <Link href='/' className={styles.footerLink}
                aria-label='footer legal information link'>
                <Htag tag='s'>
                    {setLocale(router.locale).legal_information}
                </Htag>
            </Link>
            <Link href='/' className={styles.footerLink}
                aria-label='footer privacy policy link'>
                <Htag tag='s'>
                    {setLocale(router.locale).privacy_policy}
                </Htag>
            </Link>
            <Link href='https://www.banana.codes' className={cn(styles.footerLink, styles.bananaLink)}
                target='_blank' aria-label='footer by link'>
                <Htag tag='m'>
                    {'by 🍌 codes'}
                </Htag>
            </Link>
        </footer>
    );
};
