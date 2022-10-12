import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCats } from '../../redux/slices/catsSlice';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import CatBlock from '../../components/CatsBlock/CatBlock';
import Sort from '../../components/Sort/Sort';
import CartButton from '../../components/CartBlock/CartButton/CartButton';
import Skeleton from '../../components/CatsBlock/Skeleton';

import './home.scss';
import FavoriteButton from '../../components/FavoriteBlock/FavoriteButton/FavoriteButton';
import Pagination from '../../components/Pagination/Pagination';

function Home() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);
  const cats = useSelector((state) => state.catsSlice.items);

  // const status = useSelector((state) => state.catsSlice.status);
  // console.log(sortType)

  const onChangePageHandler = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getCats = async () => {
    const sortBy = sortType.replace('-', ''); //убираем минус
    const order = sortType.includes('-') ? 'asc' : 'desc'; // если есть то -, то выбираем 1 пункт
    dispatch(
      fetchCats({
        sortBy,
        order,
        currentPage,
      }),
    );
  };

  React.useEffect(() => {
    getCats();
    setIsLoading(false);
  }, [sortType, currentPage]);

  const catsArray = cats.map((items, id) => <CatBlock key={id} {...items} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="content__cat ">
      <div className="head__cat">
        <Sort />
      </div>
      <Link to="/cart" className="cart">
        <CartButton />
      </Link>
      <Link to="/favorite" className="">
        <FavoriteButton />
      </Link>
      <div className="background__cat ">{isLoading ? skeletons : catsArray}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePageHandler} />
    </div>
  );
}

export default Home;

// React.useEffect(() => {
//   const sortBy = sortType.replace('-', ''); //убираем минус
//   const order = sortType.includes('-') ? 'asc' : 'desc'; // если есть то -, то выбираем 1 пункт
//    axios
//     .get(`https://633db211f2b0e623dc79b585.mockapi.io/cats?sortBy=${sortBy}&order=${order}`)
//     .then((response) => {
//       // console.log(response.data)
//       setCats(response.data); // Передаём данные из бэка
//       // const data = response.data;
//       // console.log(data);
//       setIsLoading(false);
//     });
// }, [sortType]);

// https://633db211f2b0e623dc79b585.mockapi.io/cats

//style={{backgroundColor: '#161617'}}
{
  /* <img src={notLike} />
<img src={Like} /> */
}
