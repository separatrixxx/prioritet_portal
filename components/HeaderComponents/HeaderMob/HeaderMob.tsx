import { HeaderMobProps } from './HeaderMob.props';
import styles from './HeaderMob.module.css';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSetup } from '../../../hooks/useSetup';
import BackIcon from './back.svg';
import BurgerIcon from './burger.svg';
import CloseIcon from './close.svg';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';
import { Search } from '../../SearchComponents/Search/Search';
import { HeaderMobLink } from '../HeaderMobLink/HeaderMobLink';
import { setLocale } from '../../../helpers/locale.helper';
import { AuthButton } from '../../AuthComponents/AuthButton/AuthButton';
import cn from 'classnames';


export const HeaderMob = ({ type }: HeaderMobProps): JSX.Element => {
    const { router, user } = useSetup();
    
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    if (typeof window !== "undefined") {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }

    return (
        <header className={styles.header}>
            <div className={cn(styles.headerContent, {
                [styles.openContent]: isMenuOpen || router.asPath === '/',
            })}>
                {
                    !isMenuOpen ?
                        <>
                            {
                                router.asPath !== '/' ?
                                    <Link href={type === 'product' ? '/catalog' : '/'}
                                        className={styles.headerButton}>
                                        <BackIcon />
                                    </Link>
                                : <></>
                            }
                                <Search isHeader={true} />
                            </>
                    :
                            <Htag tag='xxl' className={styles.headerTitle}>
                                {setLocale(router.locale).prioritet_portal}
                            </Htag>
                }
                    <button className={styles.headerButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
                    </button>
                </div>
                <AnimatePresence>
                    {
                        isMenuOpen && (
                            <motion.div className={styles.headerDiv}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: '100vh', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}>
                                <HeaderMobLink link='main' isFirst={true} onClick={() => setIsMenuOpen(false)} />
                                <HeaderMobLink link='catalog' onClick={() => setIsMenuOpen(false)} />
                                <HeaderMobLink link='favorites' onClick={() => setIsMenuOpen(false)} />
                                <HeaderMobLink link='cart' onClick={() => setIsMenuOpen(false)} />
                                <HeaderMobLink link='search' onClick={() => setIsMenuOpen(false)} />
                                {
                                    user.id ?
                                        <HeaderMobLink link='profile' onClick={() => setIsMenuOpen(false)} />
                                    : <AuthButton />
                                }
                                <div />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
        </header>
    );
};
