import styles from './CatalogList.module.css';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const CatalogList = (): JSX.Element => {
    const { router, products } = useSetup();

    return (
        <div className={styles.catalogList}>
            {
                products.length > 0 ?
                    <>
                        <Htag tag='s' className={styles.productsFound}>
                            {setLocale(router.locale).products_found.replace('$$$', String(products.length))}
                        </Htag>
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
