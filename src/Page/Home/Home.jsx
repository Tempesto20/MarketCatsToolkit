import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CatBlock from '../../components/CatsBlock/CatBlock';
import Sort from '../../components/Sort/Sort';
import CartButton from '../../components/Cart/CartButton/CartButton';
import Skeleton from '../../components/CatsBlock/Skeleton';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../../redux/filter/filterSlice';
import './home.scss';

function Home() {
  const dispatch = useDispatch();

  const [cats, setCats] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);

  console.log(sortType);

  React.useEffect(() => {
    const sortBy = sortType.replace('-', ''); //убираем минус
    const order = sortType.includes('-') ? 'asc' : 'desc'; // если есть то -, то выбираем 1 пункт

     axios
      .get(`https://633db211f2b0e623dc79b585.mockapi.io/cats?sortBy=${sortBy}&order=${order}`)
      .then((response) => {
        // console.log(response.data)
        setCats(response.data); // Передаём данные из бэка
        // const data = response.data;
        // console.log(data);
        setIsLoading(false);
      });
  }, []);

  // console.log(data)

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
      <div className="background__cat ">{isLoading ? skeletons : catsArray}</div>
    </div>
  );
}

export default Home;

// https://633db211f2b0e623dc79b585.mockapi.io/cats

//style={{backgroundColor: '#161617'}}
{
  /* <img src={notLike} />
<img src={Like} /> */
}
