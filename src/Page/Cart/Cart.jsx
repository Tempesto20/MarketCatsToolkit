import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setClearItems } from '../../redux/slices/cartSlice';
import CartItem from '../../components/CartBlock/CartItem/CartItem';
import CartEmpty from '../../components/CartBlock/CartEmpty/CartEmpty';

// import CartEmpty from '../components/CartEmpty';
// import { RootState } from '../redux/store';
// import { CartItemSlice } from '../redux/slices/cartSlice';
import clear from './clear.svg';
// import back from './back.svg';
import home from './home.png';
import cart from './cart.png';
import styles from './cart.module.scss';
import ButtonMenu from '../../components/Custom/ButtonMenu/ButtonMenu';

const fullBottom = [
  {
    link: '/',
    img: home,
    text: 'Перейти в главное меню',
  },
  {
    link: '/cart',
    img: cart,
    text: 'Оплатить сейчас',
  },
];

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

  if (!totalPrice) {
    //условный рендер, те если ничего не имеетв корзине, будет рендериться CartEmpty
    return <CartEmpty />;
  }

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.preview}>Корзина</h2>
            <div className={styles.clearContent} onClick={handlerClearItems}>
              <img src={clear} alt="" className={styles.clear} />

              <p className={styles.clearText}>Очистить корзину</p>
            </div>
          </div>
          <div className="content__items">
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className={styles.details}>
            <div className={styles.detailsInfo}>
              <div className={styles.count}>
                <p className={styles.countInfo}> Всего котиков: </p>
                <p className={styles.totalCount}>{totalCount} шт.</p>
              </div>
              <div className={styles.price}>
                <p className={styles.priceInfo}> Сумма заказа: </p>
                <p className={styles.totalPrice}>{totalPrice} ₽</p>
              </div>
            </div>
            <div className={styles.buttonBottom}>
              {fullBottom.map((item, index) => {
                return (
                  <Link to={item.link} key={index}>
                    <ButtonMenu className={styles.buttonTitle}>
                      <img src={item.img} alt="" className={styles.imgBottom} />
                      <div className={styles.buttonSubtitle}>{item.text}</div>
                    </ButtonMenu>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <Link to="/">
                <div className={styles.buttonHome}>
                  <img src={home} alt="" className={styles.home} />
                  <div className={styles.backHome}>Перейти в главное меню</div>
                </div>
              </Link>

              <Link to="/">
                <div className={styles.buttonCart}>
                  <img src={cart} alt="" className={styles.cart} />
                  <div className={styles.backCart}>Оплатить сейчас</div>
                </div>
              </Link> */
}
