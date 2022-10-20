import React from 'react';
import { useSelector } from 'react-redux';
import CartIcon from './CartIcon';
import cart from './cartB.png';
import styles from './сartButton.module.scss';
   

// Бейджик - внешние данные 

const CartButton=()=> {
    
   const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
   const items = useSelector((state) => state.cartSlice.items); 
//    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    return (

        <div className={styles.button} > {/*onClick={props.onClick} */}
            <img src={cart} className={styles.icon} />
            <p className={styles.title}>Корзина</p>
            {/* <span className={styles.badge}>{totalCount}</span>  */}
            <span className={styles.badge}> {totalPrice}</span>
        </div>

    );
}

export default CartButton;