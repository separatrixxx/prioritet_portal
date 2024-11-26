import { TableProps } from './Table.props';
import styles from './Table.module.css';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';
import cn from 'classnames';


export const Table = ({ headers, data }: TableProps): JSX.Element => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map(h => (
                            <th key={h}>
                                <Htag tag='xs'>
                                    {h}
                                </Htag>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((dv, i) => (
                        <tr key={i}>
                            {dv.map((d, i) => (
                                <td key={i} className={cn({
                                    [styles.tdLink]: typeof d.link === 'string',
                                })}>
                                    {
                                        Array.isArray(d.link) ?
                                            d.link.map((item, idx) => (
                                                <Link href={item.url} key={idx} className={styles.tableLink}
                                                    aria-label={`table product link`}>
                                                    <Htag tag='s' className={styles.productLink}>
                                                        {item.name}
                                                    </Htag>
                                                </Link>
                                            ))
                                        : d.link ?
                                            <Link href={d.link} className={styles.tableLink}
                                                aria-label={`table ${d.text} link`}>
                                                <Htag tag='s'>
                                                    {d.text}
                                                </Htag>
                                            </Link>
                                        :
                                            <Htag tag='s' className={cn({
                                                [styles.tdActive]: d.isActive,
                                            })}>
                                                {d.text}
                                            </Htag>
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
