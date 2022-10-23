import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import home from './home.png';
import cart from './cart.png';
import like from './like.png';
import styles from './fullCat.module.scss';
import ButtonMenu from '../../components/Custom/ButtonMenu/ButtonMenu';

// Детальный данный по котику по id

const controlMenu = [
  {
    link: '/',
    img: home,
    text: 'Перейти в меню',
  },
  {
    link: '/favorite',
    img: like,
    text: 'Перейти в фавориты',
  },
  {
    link: '/cart',
    img: cart,
    text: 'Перейти в корзину',
  },
];

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

  const [cat, setCat] = React.useState({});
  const { id } = useParams();
  //const params = useParams();
  //console.log(params);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchCat() {
      try {
        const { data } = await axios.get('https://633db211f2b0e623dc79b585.mockapi.io/cats/' + id);
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
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          В данном разделе представлена информация по интереющему Вас котику
        </div>
        <div className={styles.container}>
          <div className={styles.imgCat}>
            <img src={cat.img} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <h2 className={styles.name}>{cat.name}</h2>
            <h2 className={styles.breed}>{cat.breed}</h2>
            <h2 className={styles.description}>{cat.description}</h2>
            <h4 className={styles.price}>{cat.price} P</h4>
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
  );
};

export default FullCat;

// const linkBottom = ["/", "/favorite", "/cart" ];
// const imgBottom = [{home}, {like}, {cart}];
// const imgBottom = ["./home.png", "./cart.png", "./like.png"];
// const textBottom = ["Перейти в главное меню", "Перейти в фавориты", "Перейти в корзину"];

// const lol = [{home}, {cart}, {like}];

{
  /* 

          <Link to="/">
            <div className={styles.buttonHome}>
              <img src={home} alt="" className={styles.home} />
              <div className={styles.backMenu}>Перейти в главное меню</div>
            </div>
          </Link>
          <Link to="/favorite">
            <div className={styles.buttonLike}>
              <img src={like} alt="" className={styles.like} />
              <div className={styles.backFavorite}>Перейти в фавориты</div>
            </div>
          </Link>
          <Link to="/cart">
            <div className={styles.buttonCart}>
              <img src={cart} alt="" className={styles.cart} />
              <div className={styles.backCart}>Перейти в корзину</div>
            </div>
          </Link> */
}
