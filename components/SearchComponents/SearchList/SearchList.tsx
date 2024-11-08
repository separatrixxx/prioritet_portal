import styles from './SearchList.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useState, useEffect } from 'react';
import { globalSearch } from '../../../helpers/search.helper';
import { SearchInterface, SearchItemInterface } from '../../../interfaces/search.interface';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import { useSetup } from '../../../hooks/useSetup';
import { Search } from '../Search/Search';


export const SearchList = (): JSX.Element => {
    const { router } = useSetup();
    
    const [searchResults, setSearchResults] = useState<SearchInterface[]>([]);
    const query = router.query.q as string || '';

    useEffect(() => {
        const fetchResults = async () => {
            if (query.trim() !== '') {
                try {
                    const response: SearchInterface[] = await globalSearch(query.trim());
                    setSearchResults(response);
                } catch (error) {
                    console.error("Search error: ", error);
                }
            }
        };

        fetchResults();
    }, [query]);

    const totalProducts = searchResults.reduce((acc, curr) => acc + curr.total_count, 0);

    return (
        <div className={styles.searchList}>
            <Search />
            <Htag tag='s' className={styles.productsFound}>
                {setLocale(router.locale).products_found.replace('$$$', totalProducts.toString())}
            </Htag>
            {
                searchResults.map((result, i) => (
                    result.results.length > 0 ?
                        <div key={i} className={styles.searchDiv}>
                            <Htag tag='l' className={styles.searchClass}>
                                {setLocale(router.locale).classes[result.class as 'product'] + ':'}
                            </Htag>
                            {result.results.map((item: SearchItemInterface) => (
                                <Link key={item.id} href={`/${item.class}/${item.id}`} className={styles.searchName}
                                    aria-label='search list link'>
                                    <Htag tag='m' key={item.id}>
                                        {item.name}
                                    </Htag>
                                </Link>
                            ))}
                        </div>
                : <></>
                
            ))}
        </div>
    );
};
