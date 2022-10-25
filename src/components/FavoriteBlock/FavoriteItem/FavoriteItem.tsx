import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { CartItemSlice, setAddItem } from '../../../redux/slices/cartSlice';
import { setAddLike, setRemoveLike, setLike } from '../../../redux/slices/favoriteSlice';
import notLike from '../../../assets/svg/like.svg';
import Like from '../../../assets/svg/like2.svg';
import cart from '../../../assets/img/cartMenu.png';

import styles from './favoriteItem.module.scss';

const FavoriteItem: React.FC<CartItemSlice> = ({ id, name, price, img, count, discount, buy }) => {
  const dispatch = useAppDispatch();
  console.log(buy);
  const cartItem = useSelector((state: RootState) => state.cartSlice.items);
  // console.log(cartItem.length);
  const likeItem = useSelector((state: RootState) => state.favoriteSlice.items).find(
    (obj) => obj.id === id,
  );
  //писк по конкретной id
  // console.log(likeItem);

  const handlerLikeYes = () => {
    const item: CartItemSlice = {
      id,
      name,
      price,
      img,
      isFavorite: true,
      count: 0,
      buy: '',
      breed: '',
      description: '',
      discount: 0,
      age: 0,
      isSell: 0,
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

  const handlerAddItems = () => {
    for (let i = 0; i < cartItem.length; i++) {
      //console.log(cartItem[i].id);
      if (cartItem[i].id !== id) {
        //если такой id ещё НЕ имеется корзине, то добавлять
        //console.log('если такой id ещё НЕ имеется корзине, то добавлять');
      } else {
        //если такой id ИМЕЕТСЯ корзине, то не добавлять
        //console.log('не добавлять')
        return;
      }
    }
    const item: CartItemSlice = {
      id,
      name,
      price,
      img,
      discount,
      buy,
      count: 0,
      breed: '',
      description: '',
      age: 0,
      isSell: 0,
      isFavorite: false,
    };
    // if (window.confirm('Добавить котёнка в корзину?')) {
    dispatch(setAddItem(item));
    //console.log(item)
    // }
  };

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className="cart__item-img">
            <Link to={`/cat/${id}`} key={id}>
              <img className={styles.img} src={img} alt="Pizza" />
            </Link>

            <div className={clsx(discount !== 0 ? 'card__discount' : '')}>
              <p className={clsx(discount !== 0 ? 'discount' : '')}>
                {discount !== 0 ? -discount : ''}
                {discount !== 0 ? `%` : ''}
              </p>
            </div>

            <div className={styles.like}>
              {!likeItem && <img src={notLike} onClick={handlerLikeYes} alt="" />}
              {likeItem && <img src={Like} onClick={handlerLikeNo} alt="" />}
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <Link to={`/cat/${id}`} key={id}>
                <h3 className={styles.nameText}>{name}</h3>
              </Link>
            </div>
            <div className={styles.price}>
              <p className={styles.priceText}>{price * count} ₽</p>
            </div>
            {buy !== 'Продан' ? (
              <div
                className={styles.addContent}
                // className={` ${buy !== 'Продан' ? (styles.clearContent) : (' ')}`}
                onClick={handlerAddItems}>
                <img src={cart} alt="" className={styles.cart} />

                <p className={styles.addText}>Добавить в корзину</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
