import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchCats } from '../../redux/slices/catsSlice';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import CatBlock from '../../components/CatsBlock/CatBlock';
import Sort from '../../components/Sort/Sort';
import CartButton from '../../components/CartBlock/CartButton/CartButton';
import Skeleton from '../../components/CatsBlock/Skeleton';

import styles from './home.module.scss';
import FavoriteButton from '../../components/FavoriteBlock/FavoriteButton/FavoriteButton';
import Pagination from '../../components/Pagination/Pagination';
import Checkpoint from '../../components/CheckpointBlock/Checkpoint';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortType = useSelector((state: RootState) => state.filterSlice.sort.sortProperty);
  const currentPage = useSelector((state: RootState) => state.filterSlice.currentPage);
  const cats = useSelector((state: RootState) => state.catsSlice.items);
  const cart = useSelector((state: RootState) => state.cartSlice.items);
  // const favorite = useSelector((state) => state.favoriteSlice.items);
  const sell = useSelector((state: RootState) => state.filterSlice.sell);

  const status = useSelector((state: RootState) => state.catsSlice.status);
  // console.log(sell)

  // const onCategoriesHandler = React.useCallback((index) => {
  //   dispatch(setIsSell(index));
  // }, [dispatch]);

  const onChangePageHandler = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getCats = async () => {
    const sortBy = sortType.replace('-', ''); //убираем минус
    const order = sortType.includes('-') ? 'asc' : 'desc'; // если есть то -, то выбираем 1 пункт
    // const isSell = sell.value > 0 ? `isSell=${sell}` : ''; //сортировка
    const isSell = sell > 0 ? `isSell=${sell}` : ''; //сортировка
    dispatch(
      fetchCats({
        sortBy,
        order,
        currentPage,
        isSell,
      }),
    );
  };

  React.useEffect(() => {
    getCats();
  }, [sortType, currentPage, sell]);

  const catsArray = cats.map((items, id) => <CatBlock count={0} key={id} {...items} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.sort}>
            <Sort />
          </div>
          <Link to="/favorite">
            <div className={styles.favorite}>
              <FavoriteButton />
            </div>
          </Link>
          <Link to="/cart">
            <div className={styles.cart}>
              <CartButton />
            </div>
          </Link>
          <div className={styles.checkpoint}>
            <Checkpoint />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>{status === 'loading' ? skeletons : catsArray}</div>
        </div>

        <Pagination currentPage={currentPage} onChangePage={onChangePageHandler} />
      </div>
    </div>
  );
};

export default Home;

// https://633db211f2b0e623dc79b585.mockapi.io/cats

//style={{backgroundColor: '#161617'}}

// const cartMounted = React.useRef(false);
// const favoriteMounted = React.useRef(false);
// React.useEffect(() => {
//   if (cartMounted.current) {
//     // При первом рендере будет FALSE, те не отработает сохранение
//     const json = JSON.stringify(cart);
//     // console.log(json)
//     localStorage.setItem('cart', json);
//     //  window.localStorage.getItem('cart');
//   }
//   cartMounted.current = true;
// }, [cart]);

// React.useEffect(() => {
//   if (favoriteMounted.current) {
//     // При первом рендере будет FALSE, те не отработает сохранение
//     const json = JSON.stringify(favorite);
//     console.log(json);
//     localStorage.setItem('favorite', json);
//     //  window.localStorage.getItem('favorite');
//   }
//   favoriteMounted.current = true;
// }, [favorite]);
