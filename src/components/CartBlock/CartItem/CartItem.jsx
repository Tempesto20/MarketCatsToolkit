import React from 'react';
import { useDispatch } from 'react-redux';
import { setRemoveItem } from '../../../redux/slices/cartSlice';
import styles from './cartItem.module.scss';
//import { CartItemSlice } from '../redux/slices/cartSlice';
/* type CartItemProps = {
  id: string;
  name: string; 
  price: number;
  img: string;
  type: string;
  count: number;
  size: number;
}; */

const CartItem = ({ id, name, price, img, count }) => {
  const dispatch = useDispatch();


  const handlerRemoveItem = () => {
    if (window.confirm('Вы действительно ухотите удалить заказ?')) {
      dispatch(setRemoveItem(id));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="cart__item-img">
        <img className={styles.img} src={img} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          
        </p>
      </div>
      <div className="cart__item-count">
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div onClick={handlerRemoveItem} className={styles.remove}>
          Удалить из корзины
        </div>
      </div>
    </div>
  );
};

export default CartItem;
