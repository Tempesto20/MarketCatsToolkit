import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setClearLikes } from '../../redux/slices/favoriteSlice';
import FavoriteEmpty from '../../components/FavoriteBlock/FavoriteEmpty/FavoriteEmpty';
import FavoriteItem from '../../components/FavoriteBlock/FavoriteItem/FavoriteItem';
import clear from '../../assets/svg/clearCart.svg';
import home from '../../assets/img/homeMenu.png';
import cart from '../../assets/img/cartMenu.png';
import styles from './favoriteCats.module.scss';
import ButtonMenu from '../../components/Custom/ButtonMenu/ButtonMenu';

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
    text: 'Перейти в корзину',
  },
];

const FavoriteCats: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector((state: RootState) => state.favoriteSlice.items);
  // console.log(items);
  const totalPrice = useSelector((state: RootState) => state.favoriteSlice.totalPrice);
  // console.log(totalPrice)
  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);
  // console.log(totalPrice + ' ' + totalCount);

  const handlerClearItems = () => {
    // if (window.confirm('Отчисть список фаворитов ?')) {
    dispatch(setClearLikes());
    // }
  };

  if (!totalPrice) {
    //условный рендер, те если ничего не имеетв корзине, будет рендериться CartEmpty
    return <FavoriteEmpty />;
  }

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.preview}>Выбранные Вами фавориты</h2>
            <ButtonMenu className={styles.clearContent} onClick={handlerClearItems}>
              <img src={clear} alt="" className={styles.clear} />

              <p className={styles.clearText}>Удалить фаворитов</p>
            </ButtonMenu>
          </div>
          <div className="content__items">
            {items.map((item) => (
              <FavoriteItem key={item.id} {...item} />
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

export default FavoriteCats;

{
  /* <Link to="/">
                <div className={styles.buttonHome}>
                  <img src={home} alt="" className={styles.home} />
                  <div className={styles.backHome}>Перейти в главное меню</div>
                </div>
              </Link>

              <Link to="/cart">
                <div className={styles.buttonCart}>
                  <img src={cart} alt="" className={styles.cart} />
                  <div className={styles.backCart}>Перейти в корзину</div>
                </div>
              </Link> */
}
