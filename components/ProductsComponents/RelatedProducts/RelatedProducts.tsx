import { RelatedProductsProps } from './RelatedProducts.props';
import styles from './RelatedProducts.module.css';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';


export const RelatedProducts = ({ type, title, products }: RelatedProductsProps): JSX.Element => {
    return (
        <div className={styles.relatedProducts}>
            <Htag tag='m' className={styles.relatedTitle}>
                {title}
            </Htag>
            <div className={styles.relatedProductsList}>
                {products.map(p => (
                    <Link href={`/${type}/${p.id}`} key={p.id} className={styles.relatedProductsItem}
                        aria-label={`related ${type} link`}>
                        <Htag tag='s' className={styles.relatedItemName}>
                            {p.name}
                        </Htag>
                        <Htag tag='s' className={styles.relatedItemDescription}>
                            {p.description}
                        </Htag>
                    </Link>
                ))}
            </div>
        </div>
    );
};
