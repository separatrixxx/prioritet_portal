import styles from './ProfileInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { UserInfoBar } from '../UserInfoBar/UserInfoBar';
import { UserTableBlock } from '../UserTableBlock/UserTableBlock';
import { TableDataInterface } from '../../../interfaces/table.interface';
import { formatDate, formatPrice } from '../../../helpers/format.helper';
import { ManagerProductInterface } from '../../../interfaces/product.interface';
import { ProfileSettings } from '../ProfileSettings/ProfileSettings';


export const ProfileInfo = (): JSX.Element => {
    const { router, user, orders } = useSetup();

    const users = [
        {
            id: 1,
            name: 'Артём Бондаренко',
            email: 'arty@gmail.com',
            role: 'buyer',
        },
        {
            id: 2,
            name: 'Александр Евсин',
            email: 'a.evsin@gmail.com',
            role: 'admin',
        },
    ];

    const products: ManagerProductInterface[] = [
        {
            id: 80,
            name: 'Абига-Пик ВС(400г/л) 1,25кг',
            category: 'Фунгициды',
            sklad_quantity: 100,
            price: 3000,
        },
        {
            id: 81,
            name: 'Абига-Пик ВС (400г/л) 12,5кг',
            category: 'Фунгициды',
            sklad_quantity: 10,
            price: 3000,
        },
    ];

    const ordersHeaders = [
        setLocale(router.locale).order_date,
        setLocale(router.locale).order_id,
        setLocale(router.locale).status,
        setLocale(router.locale).product_name,
        setLocale(router.locale).price,
    ];

    const ordersData: TableDataInterface[][] = orders.orders.map(o => [
        { text: formatDate('2024-11-23') },
        { text: String(o.id), isActive: true },
        { text: 'Оплачено' },
        { text: 'Абига-Пик, ВС x2' },
        { text: formatPrice(2 * 14990) },
    ]);

    const usersHeaders = [
        setLocale(router.locale).user_id,
        setLocale(router.locale).user_name,
        setLocale(router.locale).email,
        setLocale(router.locale).role,
    ];

    const usersData: TableDataInterface[][] = users.map(u => [
        { text: String(u.id), isActive: true },
        { text: u.name },
        { text: u.email },
        { text: setLocale(router.locale)[u.role as 'buyer'] },
    ]);

    const productsHeaders = [
        setLocale(router.locale).product_id,
        setLocale(router.locale).product_name,
        setLocale(router.locale).category,
        setLocale(router.locale).stock_quantity,
        setLocale(router.locale).price_per_unit,
    ];

    const productsData: TableDataInterface[][] = products.map(p => [
        { text: String(p.id), isActive: true },
        { text: p.name, link: `/product/${p.id}` },
        { text: p.category },
        { text: String(p.sklad_quantity) },
        { text: formatPrice(p.price) },
    ]);

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
                <Htag tag='xxl' className={styles.name}>
                    {`${user.first_name} ${user.middle_name ? user.middle_name : ''} ${user.last_name}`}
                    <ProfileSettings />
                </Htag>
                <Htag tag='l' className={styles.role}>
                    {setLocale(router.locale)[user.role]}
                </Htag>
            </div>
            <UserInfoBar />
            {
                user.role !== 'admin' ?
                    <UserTableBlock type='orders' title={setLocale(router.locale).my_orders}
                        headers={ordersHeaders} data={ordersData} isReady={orders.total_count > -1} />

                :
                    <>
                        <UserTableBlock type='users' title={setLocale(router.locale).users}
                            headers={usersHeaders} data={usersData} />
                        <UserTableBlock type='products' title={setLocale(router.locale).products}
                            headers={productsHeaders} data={productsData} />
                    </>
            }
        </div>
    );
};
