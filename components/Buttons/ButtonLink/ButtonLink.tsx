import { ButtonLinkProps } from './ButtonLink.props';
import styles from './ButtonLink.module.css';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';


export const ButtonLink = ({ text, url }: ButtonLinkProps): JSX.Element => {
    return (
        <Link href={url} className={styles.buttonLink} aria-label='button link'>
            <Htag tag='s' className={styles.text}>
                {text}
            </Htag>
        </Link>
    );
};
