import { RelatedProductsProps } from './RelatedProducts.props';
import styles from './RelatedProducts.module.css';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';


export const RelatedProducts = ({ type, title, products }: RelatedProductsProps): JSX.Element => {
    const sortedProducts = products && products.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return (
        <div className={styles.relatedProducts}>
            <Htag tag='m' className={styles.relatedTitle}>
                {title + ':'}
            </Htag>
            <div className={styles.relatedProductsList}>
                {sortedProducts && sortedProducts.map(p => (
                    <Link href={`/${type}/${p.id}`} key={p.id} className={styles.relatedProductsItem}
                        aria-label={`related ${type} link`}>
                        <Htag tag='s' className={styles.relatedItemName}>
                            {p.name}
                        </Htag>
                    </Link>
                ))}
            </div>
        </div>
    );
};
