import { CartControllerProps } from './CartController.props';
import styles from './CartController.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import PlusIcon from './plus.svg';
import MinusIcon from './minus.svg';
import { Htag } from '../../Common/Htag/Htag';
import { minusCart, plusCart, removeCart } from '../../../helpers/cart.helper';
import cn from 'classnames';


export const CartController = ({ productId, isCart }: CartControllerProps): JSX.Element => {
    const { dispatch, cart } = useSetup();

    const count = cart.items.find(item => item.product_id === productId)?.quantity || 0;
    
    const maxCount = 10;

    return (
        <div className={cn(styles.cartController, {
            [styles.smallController]: isCart,
        })} onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}>
            <MinusIcon className={styles.controlIcon} onClick={() => {
                    if (count > 1) {
                        minusCart({
                            productId: productId,
                            cart: cart,
                            dispatch: dispatch,
                        });
                    } else {
                        removeCart({
                            productId: productId,
                            cart: cart,
                            dispatch: dispatch,
                        });
                    }
                }} />
            <Htag tag={!isCart ? 'm' : 's'} className={styles.controlCountText} >
                {count}
            </Htag>
            <PlusIcon className={styles.controlIcon} onClick={() => {
                    if (count < maxCount) {
                        plusCart({
                            productId: productId,
                            cart: cart,
                            dispatch: dispatch,
                        });
                    }
                }} />
            <div />
        </div>
    );
};
