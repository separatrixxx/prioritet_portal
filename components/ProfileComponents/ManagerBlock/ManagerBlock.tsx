import styles from './ManagerBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { UserInterface } from '../../../interfaces/user.interface';
import { Button } from '../../Buttons/Button/Button';
import { ToastSuccess } from '../../Common/Toast/Toast';
import { ManagerProductInterface } from '../../../interfaces/product.interface';
import { formatPrice } from '../../../helpers/format.helper';
import Link from 'next/link';
import { AttachFile } from '../../Common/AttachFile/AttachFile';


export const ManagerBlock = (): JSX.Element => {
    const { router } = useSetup();

    const users: UserInterface[] = [
        {
            id: 1,
            name: 'Артём Бондаренко',
            email: 'arty@gmail.com',
            role: 'manager',
            location: 'Тбилиси',
            work: 'banana.codes',
        },
        {
            id: 2,
            name: 'Александр Евсин',
            email: 'a.evsin@gmail.com',
            role: 'customer',
            location: 'Батуми',
            work: 'banana.codes',
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

    return (
        <>
            <div className={styles.managerBlock}>
                <Htag tag='l' className={styles.managerBlockTitle}>
                    {setLocale(router.locale).users + ':'}
                </Htag>
                <div className={styles.loadDiv}>
                    <AttachFile />
                    <Button text={setLocale(router.locale).load_users} onClick={() => ToastSuccess('Вы загрузили пользователей')} />
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.ordersTable}>
                        <thead>
                            <tr>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).user_id}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).user_name}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).email}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).role}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).location}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).place_of_work}
                                    </Htag>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        <Htag tag='s'>
                                            {user.id}
                                        </Htag>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {user.name}
                                        </Htag>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {user.email}
                                        </Htag>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {setLocale(router.locale)[user.role as 'customer']}
                                        </Htag>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {user.location}
                                        </Htag>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {user.work}
                                        </Htag>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.managerBlock}>
                <Htag tag='l' className={styles.managerBlockTitle}>
                    {setLocale(router.locale).products + ':'}
                </Htag>
                <div className={styles.loadDiv}>
                    <AttachFile />
                    <Button text={setLocale(router.locale).load_products} onClick={() => ToastSuccess('Вы загрузили товары')} />
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.ordersTable}>
                        <thead>
                            <tr>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).product_id}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).product_name}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).category}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).stock_quantity}
                                    </Htag>
                                </th>
                                <th>
                                    <Htag tag='s'>
                                        {setLocale(router.locale).price_per_unit}
                                    </Htag>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td className={styles.productLink}>
                                        <Link href={`/product/${product.id}`} aria-label='manager product link'>
                                            <Htag tag='s'>
                                                {product.id}
                                            </Htag>
                                        </Link>
                                    </td>
                                    <td className={styles.productLink}>
                                        <Link href={`/product/${product.id}`} aria-label='manager product link'>
                                            <Htag tag='s'>
                                                {product.name}
                                            </Htag>
                                        </Link>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {product.category}
                                        </Htag>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {product.sklad_quantity}
                                        </Htag>
                                    </td>
                                    <td>
                                        <Htag tag='s'>
                                            {formatPrice(product.price)}
                                        </Htag>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
