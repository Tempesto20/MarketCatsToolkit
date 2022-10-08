import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from './CartIcon';
import styles from './сartButton.module.scss';
   

// Бейджик - внешние данные 

const CartButton=()=> {
    
    const totalPrice = useSelector((state) => state.cartSlice.totalPrice);


    return (

        <button className={styles.button} > {/*onClick={props.onClick} */}
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Корзина</span>
            <span className={styles.badge}>{totalPrice}</span> {/*{cartItemsNumber} */}
        </button>

    );
}

export default CartButton;