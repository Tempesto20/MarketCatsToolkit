import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { axiosCats } from '../../../redux/slices/asyncThunkSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GalleryItem from './GalleryItem/GalleryItem';
import ButtonMenu from '../../Custom/ButtonMenu/ButtonMenu';
import homeMenu from '../../../assets/img/homeMenu.png';
import cartMenu from '../../../assets/img/cartMenu.png';
import likeMenu from '../../../assets/img/likeMenu.png';
import Skeleton from './Skeleton';
import styles from './gallery.module.scss';

type ControlMenu = {
  link: string;
  img: string;
  text: string;
};

const controlMenu: ControlMenu[] = [
  {
    link: '/',
    img: homeMenu,
    text: 'Перейти в меню',
  },
  {
    link: '/favorite',
    img: likeMenu,
    text: 'Перейти в фавориты',
  },
  {
    link: '/cart',
    img: cartMenu,
    text: 'Перейти в корзину',
  },
];

const Gallery: React.FC = () => {
  var settings = {
    dots: true,
  };

  const dispatch = useAppDispatch();

  const catImg = useSelector((state: RootState) => state.asyncThunkSlice.items);
  const status = useSelector((state: RootState) => state.asyncThunkSlice.status);
  // console.log(catImg);
  // console.log(status);

  const getCats = async () => {
    dispatch(axiosCats());
  };

  React.useEffect(() => {
    getCats();
  }, []);
  
  const imgArray = catImg.map((items, id) => <GalleryItem key={id} {...items} />);

  const skeletons = [...new Array(1)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.introduction}>Приветствую в разделе Gallery</h2>
          <h3 className={styles.clarification}>
            В данном разделе у Вас имеется возможность рассмотреть люимцев, которые представлены на
            сайте.
          </h3>
        </div>
        <div className={styles.container}>
          <Slider {...settings}>{status === 'loading' ? skeletons : imgArray}</Slider>
        </div>
        <div className={styles.bottom}>
          При нажатии на картинку, можно получить детальную информацию по котику.
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

export default Gallery;

// const [catImg, setCatImg] = React.useState([]);

// React.useEffect(() => {
//   try {
//     axios.get(`https://633db211f2b0e623dc79b585.mockapi.io/cats`).then((resp) => {
//       const data = resp.data;
//       // console.log(data);
//       setCatImg(data);
//     });
//   } catch (error) {
//     console.log(error + 'Header');
//   }
// }, []);
