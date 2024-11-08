import styles from './DisplayFilter.module.css';
import { useSetup } from '../../../hooks/useSetup';
import GridIcon from './grid.svg';
import RowsIcon from './rows.svg';
import LinesIcon from './lines.svg';
import { useResizeW } from '../../../hooks/useResize';
import { setDisplay } from '../../../features/display/displaySlice';
import cn from 'classnames';


export const DisplayFilter = (): JSX.Element => {
    const { dispatch, display } = useSetup();

    const width = useResizeW();

    return (
        <div className={cn(styles.displayFilter, styles.webFilter)}>
            <LinesIcon className={cn(styles.displayIcon, {
                [styles.activeIcon]: display.display === 'lines',
            })} onClick={() => dispatch(setDisplay(width > 580 ? 'lines' : 'grid'))} />
            <RowsIcon className={cn(styles.displayIcon, {
                [styles.activeIcon]: display.display === 'rows',
            })} onClick={() => dispatch(setDisplay(width > 580 ? 'rows' : 'lines'))} />
            <GridIcon className={cn(styles.displayIcon, {
                [styles.activeIcon]: display.display === 'grid',
            })} onClick={() => dispatch(setDisplay(width > 580 ? 'grid' : 'rows'))} />
        </div>
    );
};
