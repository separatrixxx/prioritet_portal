import { CartControllerProps } from './CartController.props';
import styles from './CartController.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import PlusIcon from './plus.svg';
import MinusIcon from './minus.svg';
import { Htag } from '../../Common/Htag/Htag';
import { cartLocalPlus, cartLocalMinus, removeFromCart } from '../../../helpers/cart.helper';
import { minusCart, plusCart, removeCart } from '../../../features/cart/cartSlice';
import cn from 'classnames';


export const CartController = ({ productId, isCart, setIsCart }: CartControllerProps): JSX.Element => {
    const { dispatch, cart } = useSetup();

    const [count, setCount] = useState<number>(cart.find(item => item.id === productId)?.count || 0);
    
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
                        dispatch(minusCart(productId));
                        setCount(count - 1);
                        cartLocalMinus(productId);
                    } else {
                        dispatch(removeCart(productId));
                        setIsCart(false);
                        removeFromCart(productId);
                    }
                }} />
            <Htag tag={!isCart ? 'm' : 's'} className={styles.controlCountText} >
                {count}
            </Htag>
            <PlusIcon className={styles.controlIcon} onClick={() => {
                    if (count < maxCount) {
                        dispatch(plusCart(productId));
                        setCount(count + 1);
                        cartLocalPlus(productId, maxCount);
                    }
                }} />
            <div />
        </div>
    );
};
