import styles from './MyOrdersBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { OrderInterface } from '../../../interfaces/orders.interface';
import { formatPrice } from '../../../helpers/format.helper';
import Link from 'next/link';


export const MyOrdersBlock = (): JSX.Element => {
    const { router } = useSetup();

    const orders: OrderInterface[] = [
        {
            orderId: 1,
            productId: '80',
            name: 'Абига-Пик ВС(400г/л) 1,25кг',
            quantity: 3,
            unit_price: 3000,
            total_price: 9000,
            date: '21.10.2024',
        },
        {
            orderId: 2,
            productId: '82',
            name: 'Абсолют Дуст ( 10кг)',
            quantity: 5,
            unit_price: 3000,
            total_price: 15000,
            date: '04.10.2024',
        },
        {
            orderId: 3,
            productId: '89',
            name: 'Авентрол, КЭ(960г/л) 10л',
            quantity: 1,
            unit_price: 3000,
            total_price: 3000,
            date: '13.09.2024',
        },
    ];

    return (
        <div className={styles.myOrdersBlock}>
            <Htag tag='l' className={styles.myOrdersTitle}>
                {setLocale(router.locale).my_orders + ':'}
            </Htag>
            <div className={styles.tableContainer}>
                <table className={styles.ordersTable}>
                    <thead>
                        <tr>
                            <th>
                                <Htag tag='s'>
                                    {setLocale(router.locale).order_id}
                                </Htag>
                            </th>
                            <th>
                                <Htag tag='s'>
                                    {setLocale(router.locale).product_name}
                                </Htag>
                            </th>
                            <th>
                                <Htag tag='s'>
                                    {setLocale(router.locale).quantity}
                                </Htag>
                            </th>
                            <th>
                                <Htag tag='s'>
                                    {setLocale(router.locale).price_per_unit}
                                </Htag>
                            </th>
                            <th>
                                <Htag tag='s'>
                                    {setLocale(router.locale).total_price}
                                </Htag>
                            </th>
                            <th>
                                <Htag tag='s'>
                                    {setLocale(router.locale).order_date}
                                </Htag>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.orderId}>
                                <td>
                                    <Htag tag='s'>
                                        {order.orderId}
                                    </Htag>
                                </td>
                                <td className={styles.productLink}>
                                    <Link href={`/product/${order.productId}`} aria-label='order product link'>
                                        <Htag tag='s'>
                                            {order.name}
                                        </Htag>
                                    </Link>
                                </td>
                                <td>
                                    <Htag tag='s'>
                                        {order.quantity}
                                    </Htag>
                                </td>
                                <td>
                                    <Htag tag='s'>
                                        {formatPrice(order.unit_price)}
                                    </Htag>
                                </td>
                                <td>
                                    <Htag tag='s'>
                                        {formatPrice(order.total_price)}
                                    </Htag>
                                </td>
                                <td>
                                    <Htag tag='s'>
                                        {order.date}
                                    </Htag>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
