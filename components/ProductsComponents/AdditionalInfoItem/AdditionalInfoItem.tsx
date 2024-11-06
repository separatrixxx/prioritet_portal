import { AdditionalInfoItemProps } from './AdditionalInfoItem.props';
import styles from './AdditionalInfoItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';


export const AdditionalInfoItem = ({ text, item }: AdditionalInfoItemProps): JSX.Element => {
    const renderItem = () => {
        if (Array.isArray(item)) {
            return item.map((el, index) => (
                <span key={index}>
                    <Link href={el.url} className={styles.itemLink}>
                        {el.name}
                        <div />
                    </Link>
                    {index < item.length - 1 && ' '}
                </span>
            ));
        }

        return <span>{item}</span>;
    };

    return (
        <Htag tag="m" className={styles.additionalInfoItem}>
            {text + ': '}
            {renderItem()}
        </Htag>
    );
};

