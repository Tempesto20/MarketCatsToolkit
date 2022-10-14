import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setClearItems } from '../../redux/slices/cartSlice';
import CartItem from '../../components/CartBlock/CartItem/CartItem';
import CartEmpty from '../../components/CartBlock/CartEmpty/CartEmpty';

// import CartEmpty from '../components/CartEmpty';
// import { RootState } from '../redux/store';
// import { CartItemSlice } from '../redux/slices/cartSlice';
import trashСan from './trashСan.svg';
import back from './back.svg';
import styles from './cart.module.scss';
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartSlice.items);
  // console.log(items);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  // console.log(totalPrice)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  // console.log(totalPrice + ' ' + totalCount);

  const handlerClearItems = () => {
    if (window.confirm('Отчисть корзину ?')) {
      dispatch(setClearItems());
    }
  };

  if(!totalPrice){
    //условный рендер, те если ничего не имеетв корзине, будет рендериться CartEmpty
    return <CartEmpty />
  }

  return (
    <div className={styles.container}>
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            
            Корзина
          </h2>
          <div className="cart__clear">
          <img src={trashСan} alt='' className={styles.trashСan} 
           onClick={handlerClearItems}/>

            <span className={styles.deleteSpan} 
            onClick={handlerClearItems}>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего котиков: <b>{totalCount} шт.</b> 
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
          <Link to="/" className="">
      <img src={back} alt='' className={styles.back} />
      <span>Вернуться назад</span>
      </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
