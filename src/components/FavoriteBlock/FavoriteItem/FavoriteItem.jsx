import React from 'react';
import { useDispatch } from 'react-redux';
import { setRemoveLike } from '../../../redux/slices/favoriteSlice';
import styles from './favoriteItem.module.scss';
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

const FavoriteItem = ({ id, name, price, img, count }) => {
  const dispatch = useDispatch();


  const handlerRemoveItem = () => {
    if (window.confirm('Вы действительно ухотите удалить заказ?')) {
      dispatch(setRemoveLike(id));
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
          Удалить из ваших фаворитов
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
