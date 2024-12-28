import styles from './PaginationBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setOffset } from '../../../features/filters/filtersSlice';
import { Htag } from '../../Common/Htag/Htag';
import { useResizeW } from '../../../hooks/useResize';
import ArrowIcon from './arrow.svg';
import DoubleArrowIcon from './doubleArrow.svg';
import cn from 'classnames';


export const PaginationBar = (): JSX.Element => {
    const { dispatch, products, filters } = useSetup();

    const pagesCount = Math.ceil(products.total_count / filters.start.limit);
    const currentPage = Math.floor(filters.start.offset / filters.start.limit) + 1;

    const width = useResizeW();

    const visiblePageCount = width <= 350 ? 5 : width <= 580 ? 7 : 10;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2)); 
    const endPage = Math.min(pagesCount, startPage + visiblePageCount - 1);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const goToPage = (page: number) => {
        const newOffset = (page - 1) * filters.start.limit;
        dispatch(setOffset(newOffset));
        scrollToTop();
    };

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <div className={styles.paginationBar}>
            <DoubleArrowIcon className={cn(styles.nextPage, styles.leftArrow, {
                [styles.activeArrow]: currentPage > 1,
            })} onClick={() => currentPage > 1 && goToPage(1)}/>
            <ArrowIcon className={cn(styles.nextPage, styles.leftArrow, {
                [styles.activeArrow]: currentPage > 1,
            })} onClick={() => currentPage > 1 && goToPage(currentPage - 1)} />
            <div className={styles.pageNumbers} style={{ gridTemplateColumns: `repeat(${visiblePageCount}, 1fr)` }}>
                {pages.map((page) => (
                    <div key={page} className={cn(styles.pageNumber, {
                        [styles.activePage]: page === currentPage,
                    })} onClick={() => goToPage(page)}>
                        <Htag tag='s'>
                            {page}
                        </Htag>
                    </div>
                ))}
            </div>
            <ArrowIcon className={cn(styles.nextPage, {
                [styles.activeArrow]: currentPage < pagesCount,
            })} onClick={() => currentPage < pagesCount && goToPage(currentPage + 1)} />
            <DoubleArrowIcon className={cn(styles.nextPage, {
                [styles.activeArrow]: currentPage < pagesCount,
            })} onClick={() => currentPage < pagesCount && goToPage(pagesCount)} />
        </div>
    );
};
