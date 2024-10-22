import styles from './MainImage.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const MainImage = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.mainImageDiv}>
            <Image className={styles.mainImage}
				draggable='false'
				loader={() => '/MainImage.webp'}
				src={'/MainImage.webp'}
				alt='main image'
				width={1}
				height={1}
				unoptimized={true}
				priority
				quality={20}
			/>
            <Htag tag='xxxl' className={styles.mainImageTitle}>
                {setLocale(router.locale).prioritet_portal}
            </Htag>
        </div>
    );
};
