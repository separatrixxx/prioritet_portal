import { ProfileInfoProps } from './ProfileInfo.props';
import styles from './ProfileInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MyOrdersBlock } from '../MyOrdersBlock/MyOrdersBlock';
import { ManagerBlock } from '../ManagerBlock/ManagerBlock';
import LocationIcon from './location.svg';
import WorkIcon from './work.svg';


export const ProfileInfo = ({ type }: ProfileInfoProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.profileInfo}>
            <div className={styles.nameDiv}>
                <Htag tag='xl' className={styles.name}>
                    {'Артём Бондаренко'}
                </Htag>
                <Htag tag='m' className={styles.role}>
                    {setLocale(router.locale)[type]}
                </Htag>
            </div>
            <div className={styles.profileInfoDiv}>
                <div>
                    <LocationIcon />
                    <Htag tag='s'>
                        {'Тбилиси'}
                    </Htag>
                </div>
                <div>
                    <WorkIcon />
                    <Htag tag='s'>
                        {'banana.codes'}
                    </Htag>
                </div>
            </div>
            {
                type === 'customer' ?
                    <MyOrdersBlock />
                :
                    <ManagerBlock />
            }
        </div>
    );
};
