import { AdditionalInfoProps } from './AdditionalInfo.props';
import styles from './AdditionalInfo.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { AdditionalInfoItem } from '../AdditionalInfoItem/AdditionalInfoItem';
import { formatDate } from '../../../helpers/format.helper';


export const AdditionalInfo = ({ product }: AdditionalInfoProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.additionalInfo}>
            <Htag tag='xl' className={styles.additionalInfoTitle}>
                {setLocale(router.locale).additional_information + ':'}
            </Htag>
            <div className={styles.additionalInfoDiv}>
                <AdditionalInfoItem text={setLocale(router.locale).types.active_ingredient}
                    item={product.result.related_active_ingredient?.map(i => ({
                        name: i.name,
                        url: `/active_ingredient/${i.id}`
                    }))} />
                <AdditionalInfoItem text={setLocale(router.locale).concentration}
                    item='200 г/кг' />
                <AdditionalInfoItem text={setLocale(router.locale).supplied_packaging}
                    item='Бутылка' />
                <AdditionalInfoItem text={setLocale(router.locale).supplied_packaging_volume}
                    item='10 л.' />
                <AdditionalInfoItem text={setLocale(router.locale).toxicity_level}
                    item='3/3' />
                <AdditionalInfoItem text={setLocale(router.locale).classes.harmful}
                    item={product.result.related_harmful?.map(h => ({
                        name: h.name,
                        url: `/harmful/${h.id}`
                    }))} />
                <AdditionalInfoItem text={setLocale(router.locale).classes.proceed}
                    item={product.result.related_proceed?.map(p => ({
                        name: p.name,
                        url: `/proceed/${p.id}`
                    }))} />
                <AdditionalInfoItem text={setLocale(router.locale).latest_arrival_to_stock}
                    item={formatDate(product.result.sklad_latest_arrivals.data.arrival_date)} />
            </div>
        </div>
    );
};
