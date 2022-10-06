import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CatBlock from '../../components/CatsBlock/CatBlock';
import Sort from '../../components/Sort/Sort';
import CartButton from '../../components/Cart/CartButton/CartButton';
import Skeleton from '../../components/CatsBlock/Skeleton';

import './home.scss';


function Home() {
  const [cats, setCats] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCats = axios
      .get(`https://633db211f2b0e623dc79b585.mockapi.io/cats`)
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
      <Link to="/cart">
        <div className="cart">
          <CartButton />
        </div>
      </Link>
      <div className="background__cat ">
        {
        isLoading ? skeletons :  catsArray   
        }
      </div>
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
