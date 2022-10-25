import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setClearItems } from '../../redux/slices/cartSlice';
import CartItem from '../../components/CartBlock/CartItem/CartItem';
import CartEmpty from '../../components/CartBlock/CartEmpty/CartEmpty';
import ButtonMenu from '../../components/Custom/ButtonMenu/ButtonMenu';
import clear from '../../assets/svg/clearCart.svg';
import home from '../../assets/img/homeMenu.png';
import cart from '../../assets/img/cartMenu.png';
import styles from './cart.module.scss';

type ControlMenu = {
  link: string;
  img: string;
  text: string;
};

const controlMenu: ControlMenu[] = [
  {
    link: '/',
    img: home,
    text: 'Перейти в меню',
  },
  {
    link: '/cart',
    img: cart,
    text: 'Оплатить сейчас',
  },
];

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector((state: RootState) => state.cartSlice.items);
  // console.log(items);
  const totalPrice = useSelector((state: RootState) => state.cartSlice.totalPrice);
  // console.log(totalPrice)
  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);
  // console.log(totalPrice + ' ' + totalCount);

  const handlerClearItems = () => {
    // if (window.confirm('Отчисть корзину ?')) {
    dispatch(setClearItems());
    // }
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
            <ButtonMenu className={styles.clearContent} onClick={handlerClearItems}>
              <img src={clear} alt="" className={styles.clear} />

              <p className={styles.clearText}>Очистить корзину</p>
            </ButtonMenu>
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
              {controlMenu.map((item, index) => {
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
