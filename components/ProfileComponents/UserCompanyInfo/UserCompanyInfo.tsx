import styles from './UserCompanyInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const UserCompanyInfo = (): JSX.Element => {
    const { router, user } = useSetup();

    return (
        <div className={styles.userCompanyInfo}>
            <Htag tag='l' className={styles.infoTitle}>
                {setLocale(router.locale).company_info}
            </Htag>
            <Htag tag='s' className={styles.companyInfoTitle}>
                {setLocale(router.locale).company_name}
            </Htag>
            <Htag tag='m' className={styles.companyInfoText}>
                {user.company_name}
            </Htag>
            {
                user.company_inn &&
                <>
                    <Htag tag='xs' className={styles.companyInfoTitle}>
                        {setLocale(router.locale).company_inn}
                    </Htag>
                    <Htag tag='m' className={styles.companyInfoText}>
                        {user.company_inn}
                    </Htag>
                </>
            }
            {
                user.company_kpp &&
                <>
                    <Htag tag='xs' className={styles.companyInfoTitle}>
                        {setLocale(router.locale).company_kpp}
                    </Htag>
                    <Htag tag='m' className={styles.companyInfoText}>
                        {user.company_kpp}
                    </Htag>
                </>
            }
            {
                user.company_address &&
                <>
                    <Htag tag='xs' className={styles.companyInfoTitle}>
                        {setLocale(router.locale).company_address}
                    </Htag>
                    <Htag tag='m' className={styles.companyInfoText}>
                        {user.company_address}
                    </Htag>
                </>
            }
            {
                user.position &&
                <>
                    <Htag tag='xs' className={styles.companyInfoTitle}>
                        {setLocale(router.locale).position}
                    </Htag>
                    <Htag tag='m' className={styles.companyInfoText}>
                        {user.position}
                    </Htag>
                </>
            }
        </div>
    );
}
