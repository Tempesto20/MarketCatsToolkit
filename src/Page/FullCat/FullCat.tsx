import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { axiosFullCat } from '../../redux/slices/fullCatSlice';
// import axios from 'axios';
import like from '../../assets/img/likeMenu.png';
import home from '../../assets/img/homeMenu.png';
import cart from '../../assets/img/cartMenu.png';
import ButtonMenu from '../../components/Custom/ButtonMenu/ButtonMenu';
import Skeleton from './Skeleton';
import styles from './fullCat.module.scss';

// Детальный данный по котику по id

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

const FullCat: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  // const navigate = useNavigate();

  //const params = useParams();
  //console.log(params);

  const cat = useSelector((state: any) => state.fullCatSlice.items);
  const status = useSelector((state: RootState) => state.fullCatSlice.status);
  console.log(cat);
  console.log(status);

  const getCats = async () => {
    dispatch(axiosFullCat({ id }));
  };

  React.useEffect(() => {
    getCats();
  }, [id]);
  const skeletons = [...new Array(1)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          В данном разделе представлена информация по интереющему Вас котику
        </div>
        {status === 'loading' ? (
          skeletons
        ) : (
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
        )}{' '}
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

// const [cat, setCat] = React.useState<{
//   img: string;
//   name: string;
//   breed: string;
//   description: string;
//   price: number;
// }>({
//   img: '',
//   name: '',
//   breed: '',
//   description: '',
//   price: 0,
// });

// React.useEffect(() => {
//   async function fetchCat() {
//     try {
//       const { data } = await axios.get('https://633db211f2b0e623dc79b585.mockapi.io/cats/' + id);
//       setCat(data);
//     } catch (error) {
//       console.log(error + 'FullCat');
//       navigate('/'); // для перехода на главную страницу, если пицца не нашлась
//     }
//   }
//   fetchCat();
// }, [id, navigate]);

// if (!cat) {
//   //если пицца ещё не загрузилась, ничего не выводи
//   return <> Загрузка...</>;
// }
