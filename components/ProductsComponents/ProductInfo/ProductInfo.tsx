import { ProductInfoProps } from './ProductInfo.props';
import styles from './ProductInfo.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { Slider } from '../../Slider/Slider/Slider';
import { Button } from '../../Buttons/Button/Button';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { formatPrice } from '../../../helpers/format.helper';


export const ProductInfo = ({ name, description, skladPrice }: ProductInfoProps): JSX.Element => {
    const { router } = useSetup();

    const images: string[] = ['/logo.svg', '/logo.svg', '/logo.svg'];

    return (
        <div className={styles.productInfo}>
            <Slider name={name} images={images} />
            <div className={styles.infoDiv}>
                <Htag tag='l' className={styles.productName}>
                    {name}
                </Htag>
                <Htag tag='m' className={styles.productDescription}>
                    {'Описание очень хорошего средства для борьбы с вредителями - ' + name}
                </Htag>
                {
                    true ?
                        <div className={styles.priceDiv}>
                            <Htag tag='m' className={styles.price}>
                                {formatPrice(3000) + ' ₽'}
                            </Htag>
                            <Button text={setLocale(router.locale).order} onClick={() => { }} />
                        </div>
                    : <></>
                }
            </div>
        </div>
    );
};
