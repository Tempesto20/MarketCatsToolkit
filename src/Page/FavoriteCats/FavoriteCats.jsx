import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setClearLikes } from '../../redux/slices/favoriteSlice';
import FavoriteEmpty from '../../components/FavoriteBlock/FavoriteEmpty/FavoriteEmpty';
import FavoriteItem from '../../components/FavoriteBlock/FavoriteItem/FavoriteItem';
import trashСan from './trashСan.svg';
import back from './back.svg';
import styles from './favoriteCats.module.scss';


const FavoriteCats = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favoriteSlice.items);
  // console.log(items);
  const totalPrice = useSelector((state) => state.favoriteSlice.totalPrice);
  // console.log(totalPrice)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  // console.log(totalPrice + ' ' + totalCount);

  const handlerClearItems = () => {
    if (window.confirm('Отчисть список фаворитов ?')) {
      dispatch(setClearLikes());
    }
  };

  if(!totalPrice){
    //условный рендер, те если ничего не имеетв корзине, будет рендериться CartEmpty
    return <FavoriteEmpty />
  }

  return (
    <div className="">
      <div className={styles.wrapper}>Фавориты котики</div>
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">

            Выбранные вами фавориты
          </h2>
          <div className="cart__clear">
           <img src={trashСan} alt='' className={styles.trashСan} 
           onClick={handlerClearItems}/>

            <span onClick={handlerClearItems} className={styles.deleteSpan}>Удалить выбранных фаворитов</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item) => (
            <FavoriteItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего котиков: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма стоимости выбранных котиков: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
          </div>
        </div>
      </div>

      <Link to="/" className="">
      <img src={back} alt='' className={styles.back} />
      <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default FavoriteCats;
