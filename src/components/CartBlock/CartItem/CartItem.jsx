import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setRemoveItem } from '../../../redux/slices/cartSlice';

import { setAddLike, setRemoveLike, setLike } from '../../../redux/slices/favoriteSlice';
import notLike from '../../../assets/img/svg/like.svg';
import Like from '../../../assets/img/svg/like2.svg';

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

  const likeItem = useSelector((state) => state.favoriteSlice.items).find((obj) => obj.id === id);
  //писк по конкретной id
  // console.log(likeItem);

  const handlerLikeYes = () => {
    const item = {
      id,
      name,
      price,
      img,
      isFavorite: true,
      count: 0,
    };
    // setLike(true); // при использовании useState
    dispatch(setLike(true));
    dispatch(setAddLike(item));
    // console.log(item)
  };

  const handlerLikeNo = () => {
    // setLike(false);// при использовании useState
    dispatch(setLike(false));
    if (window.confirm('Вы действительно ухотите удалить котика из списка ваших фаворитов?')) {
      dispatch(setRemoveLike(id));
    }
    // dispatch(setRemoveLike(id));
    //console.log(item)
  };

  const handlerRemoveItemLikes = () => {
    if (window.confirm('Вы действительно ухотите удалить котика из списка ваших фаворитов?')) {
      dispatch(setRemoveLike(id));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div className="cart__item-img">
          <Link to={`/cat/${id}`} key={id}>
            <img className={styles.img} src={img} alt="Pizza" />
          </Link>
          <div className={styles.like}>
            {!likeItem && <img src={notLike} onClick={handlerLikeYes} alt="" />}
            {likeItem && <img src={Like} onClick={handlerLikeNo} alt="" />}
          </div>
        </div>
        <div className="cart__item-info">
          <Link to={`/cat/${id}`} key={id}>
            <h3>{name}</h3>
          </Link>
        </div>
        <div className="cart__item-count"></div>
        <div className="cart__item-price">
          <b>{price * count} ₽</b>
        </div>
        <div className="cart__item-remove">
          <div onClick={handlerRemoveItem} className={styles.remove}>
            Удалить из корзины
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
