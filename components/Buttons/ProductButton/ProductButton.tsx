import { ProductButtonProps } from './ProductButton.props';
import styles from './ProductButton.module.css';
import FavoriteIcon from './favorite.svg';
import BuyIcon from './buy.svg';
import RemoveIcon from './remove.svg';
import cn from 'classnames';


export const ProductButton = ({ type, flag, isHovered, size, onClick, className }: ProductButtonProps): JSX.Element => {
    let FavIcon = FavoriteIcon;

    if (type === 'favorite') {
        FavIcon = FavoriteIcon;
    } else if (type === 'buy') {
        FavIcon = BuyIcon;
    } else {
        FavIcon = RemoveIcon;
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        onClick(e);
    };

    return (
        <button className={cn(styles.productButton, className, {
            [styles.hoveredButton]: isHovered,
            [styles.activeButton]: flag,
            [styles.hoveredActiveButton]: flag && isHovered,
            [styles.lSize]: size === 'l',
        })} onClick={handleClick}>
            <div />
            <FavIcon />
        </button>
    );
};
