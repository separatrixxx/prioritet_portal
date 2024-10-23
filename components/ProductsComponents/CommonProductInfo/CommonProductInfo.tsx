import { CommonProductInfoProps } from './CommonProductInfoprops';
import styles from './CommonProductInfo.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { Slider } from '../../Slider/Slider/Slider';
import { Button } from '../../Buttons/Button/Button';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { formatDate, formatPrice, formatTimestamp } from '../../../helpers/format.helper';
import cn from 'classnames';


export const CommonProductInfo = ({ product }: CommonProductInfoProps): JSX.Element => {
    const { router } = useSetup();

    const images: string[] = ['/logo.svg', '/logo.svg', '/logo.svg'];

    return (
        <div className={styles.commonProductInfo}>
            <Slider name={product.result.name} images={images} />
            <div className={styles.infoDiv}>
                <Htag tag='xl' className={styles.commonProductName}>
                    {product.result.name}
                </Htag>
                <Htag tag='m' className={styles.commonProductDescription}>
                    {product.result.description}
                </Htag>
            </div>
        </div>
    );
};
