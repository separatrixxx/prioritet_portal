import styles from './LocaleChange.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { en } from '../../../locales/en.locale';
import { ru } from '../../../locales/ru.locale';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { Modal } from '../Modal/Modal';
import { useSetup } from '../../../hooks/useSetup';


export const LocaleChange = (): JSX.Element => {
    const { router } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    const languages = [en, ru];
    const langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

    return (
        <>
            <Htag tag='m' className={styles.lang} onClick={() => setIsActive(true)}>
                {setLocale(router.locale).language}
            </Htag>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <div className={styles.blockLanguages}>
                    {languages.map(m => (
                        <Link key={m.locale} href={router.asPath} locale={m.locale}
                            onClick={() => setIsActive(false)} aria-label='change locale link'>
                            <Htag tag='l' className={styles.langLink}>{m.language}</Htag>
                        </Link>
                    ))}
                </div>
            </Modal>
        </>
    );
};