import { ProductPriceBlockProps } from './ProductPriceBlock.props';
import styles from './ProductPriceBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import FavoriteIcon from './favorite.svg';
import BuyIcon from './buy.svg';
import { formatPrice } from '../../../helpers/format.helper';
import cn from 'classnames';


export const ProductPriceBlock = ({ size, price }: ProductPriceBlockProps): JSX.Element => {
    return (
        <div className={styles.productPriceBlock} onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
        }}>
            <Htag tag={size} className={styles.productPrice}>
                {formatPrice(price || 0)}
            </Htag>
            <div className={cn(styles.productButton, {
                [styles.sizeXL]: size === 'xl',
            })}>
                <div />
                <FavoriteIcon />
            </div>
            <div className={cn(styles.productButton, {
                [styles.sizeXL]: size === 'xl',
            })}>
                <div />
                <BuyIcon />
            </div>
        </div>
    );
};
