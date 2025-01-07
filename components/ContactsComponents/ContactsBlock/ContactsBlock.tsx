import styles from './ContactsBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const ContactsBlock = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.contactsBlock}>
            <Htag tag='l'>
                {setLocale(router.locale).prioritet_info.inn + ': '}
                <span>{'2312154401'}</span>
            </Htag>
            <Htag tag='l'>
                {setLocale(router.locale).prioritet_info.ogrn + ': '}
                <span>{'1082312010043'}</span>
            </Htag>
            <Htag tag='l'>
                {setLocale(router.locale).prioritet_info.kpp + ': '}
                <span>{'237301001'}</span>
            </Htag>
        </div>
    );
};
