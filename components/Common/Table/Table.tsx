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
                                    [styles.tdLink]: d.link,
                                })}>
                                    {
                                        !d.link ?
                                            <Htag tag='s' className={cn({
                                                [styles.tdActive]: d.isActive,
                                            })}>
                                                {d.text}
                                            </Htag>
                                        :
                                            <Link href={d.link} aria-label={`table ${d.text} link`}>
                                                <Htag tag='s'>
                                                    {d.text}
                                                </Htag>
                                            </Link>
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
