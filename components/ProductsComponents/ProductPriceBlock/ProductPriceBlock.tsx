import { ProductPriceBlockProps } from './ProductPriceBlock.props';
import styles from './ProductPriceBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import FavoriteIcon from './favorite.svg';
import { formatPrice } from '../../../helpers/format.helper';
import { Button } from '../../Buttons/Button/Button';
import cn from 'classnames';


export const ProductPriceBlock = ({ size, price }: ProductPriceBlockProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.productPriceBlock}>
            <Htag tag={size} className={styles.productPrice}>
                {formatPrice(price || 0)}
            </Htag>
            <div className={styles.buttonsDiv} onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
                <Button text={setLocale(router.locale).buy} onClick={() => {}} />
                <div className={cn(styles.favoriteButton, {
                    [styles.sizeXL]: size === 'xl',
                })}>
                    <div />
                    <FavoriteIcon />
                </div>
            </div>
        </div>
    );
};
