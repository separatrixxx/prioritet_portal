import { UserTableBlockProps } from './UserTableBlock.props';
import styles from './UserTableBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { Table } from '../../Common/Table/Table';
import { ToastSuccess } from '../../Common/Toast/Toast';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Buttons/Button/Button';
import { AttachFile } from '../../Common/AttachFile/AttachFile';
import { ButtonLight } from '../../Buttons/ButtonLight/ButtonLight';


export const UserTableBlock = ({ type, title, headers, data }: UserTableBlockProps): JSX.Element => {
    const { router } = useSetup();

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
            <Table headers={headers} data={data} />
        </div>
    );
};
