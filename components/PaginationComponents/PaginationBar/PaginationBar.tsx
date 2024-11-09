import styles from './PaginationBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Buttons/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { setLimit, setOffset } from '../../../features/filters/filtersSlice';


export const PaginationBar = (): JSX.Element => {
    const { router, dispatch, filters } = useSetup();

    return (
        <div className={styles.paginationBar}>
            <Button text={setLocale(router.locale).show_more} onClick={() => {
                dispatch(setLimit(filters.start.limit + 12));
            }} />
        </div>
    );
};
