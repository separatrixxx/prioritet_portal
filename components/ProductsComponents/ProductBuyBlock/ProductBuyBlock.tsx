import styles from './ProductBuyBlock.module.css';
import FavoriteIcon from './favorite.svg';
import { Button } from '../../Buttons/Button/Button';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';


export const ProductBuyBlock = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.productBuyBlock}>
            <Button text={setLocale(router.locale).buy} onClick={() => {}} isPrimary={true} />
            <div className={styles.favoriteButton}>
                <div />
                <FavoriteIcon />
            </div>
        </div>
    );
};
