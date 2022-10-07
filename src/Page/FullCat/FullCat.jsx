import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './fullCat.module.scss';
const FullCat = () => {
  // const [pizza, setPizza] = React.useState<{
  //   img: string;
  //   name: string;
  //   price: number;
  // }>({
  //   img: '',
  //   name: '',
  //   price: 0,
  // });

  const [cat, setCat] = React.useState({  });
  const { id } = useParams();
  //const params = useParams();
  //console.log(params);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchCat() {
      try {
        const { data } = await axios.get('https://633db211f2b0e623dc79b585.mockapi.io/cats' + id);
        setCat(data);
      } catch (error) {
        console.log(error + 'FullCat');
        navigate('/'); // для перехода на главную страницу, если пицца не нашлась
      }
    }
    fetchCat();
  }, [id, navigate]);

  if (!cat) {
    //если пицца ещё не загрузилась, ничего не выводи
    return <> Загрузка...</>;
  }

  return (
    <div className={styles.container}>
      <img src={cat.img} alt="" />
      <h2>{cat.name}</h2>
      {/*      <p>{pizza.sizes}</p>
      <p>{cat.types}</p> */}
      <h4>{cat.price} P</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullCat;
