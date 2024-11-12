import { ProfileInfoProps } from './ProfileInfo.props';
import styles from './ProfileInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MyOrdersBlock } from '../MyOrdersBlock/MyOrdersBlock';
import { ManagerBlock } from '../ManagerBlock/ManagerBlock';
import LocationIcon from './location.svg';
import WorkIcon from './work.svg';
import { Button } from '../../Buttons/Button/Button';
import { logOutUser } from '../../../helpers/auth.helper';


export const ProfileInfo = ({ type }: ProfileInfoProps): JSX.Element => {
    const { router, dispatch, user } = useSetup();

    if (!user.id) {
        return (
            <div className={styles.profileInfo}>
                <Htag tag='l' className={styles.loginToViewText}>
                    {setLocale(router.locale).login_to_view_profile}
                </Htag>
            </div>
        );
    }

    return (
        <div className={styles.profileInfo}>
            <div className={styles.nameDiv}>
                <Htag tag='xl' className={styles.name}>
                    {`${user.first_name} ${user.last_name}`}
                </Htag>
                <Htag tag='m' className={styles.role}>
                    {setLocale(router.locale)[type]}
                </Htag>
                <Button text={setLocale(router.locale).log_out} isHeight={true}
                    onClick={() => logOutUser({
                        dispatch: dispatch,
                    })} />
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
                type !== 'admin' ?
                    <MyOrdersBlock />
                :
                    <ManagerBlock />
            }
        </div>
    );
};
