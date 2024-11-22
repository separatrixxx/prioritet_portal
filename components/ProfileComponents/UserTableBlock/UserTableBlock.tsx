import { UserTableBlockProps } from './UserTableBlock.props';
import styles from './UserTableBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { Table } from '../../Common/Table/Table';
import { ToastSuccess } from '../../Common/Toast/Toast';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { AttachFile } from '../../Common/AttachFile/AttachFile';
import { ButtonLight } from '../../Buttons/ButtonLight/ButtonLight';
import { Spinner } from '../../Common/Spinner/Spinner';


export const UserTableBlock = ({ type, title, headers, data, isReady }: UserTableBlockProps): JSX.Element => {
    const { router } = useSetup();

    if (!isReady) {
        return <Spinner />
    }

    return (
        <div className={styles.userTableBlock}>
            <Htag tag='l' className={styles.userTableTitle}>
                {title}
            </Htag>
            {
                type !== 'orders' &&
                <div className={styles.loadDiv}>
                    <AttachFile />
                    <ButtonLight text={setLocale(router.locale).load_users}
                        onClick={() => ToastSuccess('Вы загрузили пользователей')} />
                    <ButtonLight text={setLocale(router.locale).add_manually}
                        onClick={() => ToastSuccess('Здесь будет реализована логика ручного ввода для добавления пользователя через всплывающее модальное окно')} />
                </div>
            }
            {
                data.length > 0 ?
                    <Table headers={headers} data={data} />
                :
                    <Htag tag='m' className={styles.haveNotText}>
                        {setLocale(router.locale).you_have_not_had_orders}
                    </Htag>
            }
        </div>
    );
};
