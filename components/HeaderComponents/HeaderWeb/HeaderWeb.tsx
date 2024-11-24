import { HeaderWebProps } from './HeaderWeb.props';
import styles from './HeaderWeb.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { HeaderWebLink } from '../HeaderWebLink/HeaderWebLink';
import BackIcon from './back.svg';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';
import { Search } from '../../SearchComponents/Search/Search';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useState } from 'react';
import { AuthButton } from '../../AuthComponents/AuthButton/AuthButton';
import cn from 'classnames';


export const HeaderWeb = ({ type }: HeaderWebProps): JSX.Element => {
    const { router, user } = useSetup();

    return (
        <header className={cn(styles.header, {
            [styles.mainHeader]: type === 'main',
        })}>
            {
                type !== 'main' ?
                    <Link href={type === 'product' || type === 'favorites' ? '/catalog' : '/'}
                        className={styles.backLink}>
                        <BackIcon />
                        <Htag tag='s'>
                            {setLocale(router.locale)[type === 'product' || type === 'favorites' ? 'to_catalog' : 'to_main_page']}
                        </Htag>
                    </Link>
                : <></>
            }
            <Search isHeader={true} />
            {
                type === 'main' ?
                    <div />
                : <></>
            }
            {
                type === 'main' ?
                    <>
                        <HeaderWebLink type='catalog' />
                        <HeaderWebLink type='cart' />
                    </>
                :
                    <>
                        <HeaderWebLink type='favorites' />
                        {
                            type === 'catalog' || type === 'product' || type === 'favorites' ?
                                <HeaderWebLink type='cart' />
                            :
                                <HeaderWebLink type='catalog' />
                        }
                    </>
            }
            {
                user.id ?
                    <HeaderWebLink type='profile' />
                : <AuthButton />
            }
        </header>
    );
};
