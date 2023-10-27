import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { CartItemSlice, setRemoveItem } from '../../../redux/slices/cartSlice';
import { setAddLike, setRemoveLike, setLike } from '../../../redux/slices/favoriteSlice';
import notLike from '../../../assets/svg/like.svg';
import Like from '../../../assets/svg/like2.svg';
import clearCart from '../../../assets/svg/clearCart.svg';
import styles from './cartItem.module.scss';

const CartItem: React.FC<CartItemSlice> = ({ id, name, price, img, count, discount }) => {
  const dispatch = useAppDispatch();

  const handlerRemoveItem = () => {
    // if (window.confirm('Вы действительно хотите удалить котёнка из корзины?')) {
    dispatch(setRemoveItem(id));
    // }
  };

  const likeItem = useSelector((state: RootState) => state.favoriteSlice.items).find(
    (obj: { id: string; }) => obj.id === id,
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

            <div className={styles.clearContent} onClick={handlerRemoveItem}>
              <img src={clearCart} alt="" className={styles.clear} />

              <p className={styles.clearText}>Удалить из корзины</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
