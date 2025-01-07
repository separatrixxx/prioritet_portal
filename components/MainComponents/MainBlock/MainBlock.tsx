import styles from './MainBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import { MainImages } from '../MainImages/MainImages';


export const MainBlock = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.mainBlock}>
			<div className={styles.mainTextDiv}>
				<Htag tag='xxxl' className={styles.mainImageTitle}>
					{setLocale(router.locale).prioritet_portal2}
				</Htag>
				<div>
					<Htag tag='m' className={styles.mainImageText}>
						{setLocale(router.locale).prioritet_about}
					</Htag>
					<Button text={setLocale(router.locale).go_to_catalog} isHeight={true}
						onClick={() => router.push('/catalog')} />
				</div>
			</div>
			<MainImages />
        </div>
    );
};
