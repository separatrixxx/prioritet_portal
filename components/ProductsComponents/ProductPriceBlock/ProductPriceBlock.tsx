import { ProductPriceBlockProps } from './ProductPriceBlock.props';
import styles from './ProductPriceBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import FavoriteIcon from './favorite.svg';
import BuyIcon from './buy.svg';
import { formatPrice } from '../../../helpers/format.helper';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const ProductPriceBlock = ({ price, isMain, isHovered }: ProductPriceBlockProps): JSX.Element => {
    const { router, display } = useSetup();

    return (
        <div className={cn(styles.productPriceBlock, {
            [styles.productPriceLines]: display.display === 'lines' && !isMain,
        })} onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
        }}>
            <Htag tag='l' className={cn(styles.productPrice, {
                [styles.hoveredPrice]: isHovered,
            })}>
                {formatPrice(price || 0)}
            </Htag>
            <button className={cn(styles.productButton, {
                [styles.hoveredButton]: isHovered,
            })}>
                <div />
                <FavoriteIcon />
            </button>
            <button className={cn(styles.productButton, {
                [styles.hoveredButton]: isHovered,
            })}>
                <div />
                <BuyIcon />
            </button>
            <button className={styles.productMobButton}>
                <div />
                <BuyIcon />
                <Htag tag='m' className={styles.buyText}>
                    {setLocale(router.locale).buy}
                </Htag>
            </button>
        </div>
    );
};
