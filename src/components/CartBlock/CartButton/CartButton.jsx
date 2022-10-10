import React from 'react';
import { useSelector } from 'react-redux';
import CartIcon from './CartIcon';
import styles from './сartButton.module.scss';
   

// Бейджик - внешние данные 

const CartButton=()=> {
    
   const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
   const items = useSelector((state) => state.cartSlice.items); 
   const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    return (

        <button className={styles.button} > {/*onClick={props.onClick} */}
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Корзина</span>
            {/* <span className={styles.badge}>{totalCount}</span>  */}
            <span className={styles.badge}>{totalCount} | {totalPrice}</span>
        </button>

    );
}

export default CartButton;