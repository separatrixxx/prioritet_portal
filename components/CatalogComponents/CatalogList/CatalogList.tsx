import styles from './CatalogList.module.css';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';


export const CatalogList = (): JSX.Element => {
    const { products } = useSetup();

    return (
        <div className={styles.catalogList}>
            {
                products.length > 0 ?
                    <>
                        {products.map(p => (
                            <CatalogItem key={p.id} url={p.name} name={p.name} type={p.type} description={p.description}
                                price={p.price} availability={p.availability} />
                        ))}
                    </>
                : <Spinner />
            }
        </div>
    );
};
