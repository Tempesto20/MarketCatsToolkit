import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GalleryItem from './GalleryItem/GalleryItem';
import ButtonMenu from '../../Custom/ButtonMenu/ButtonMenu';
import homeMenu from '../../../assets/img/homeMenu.png';
import cartMenu from '../../../assets/img/cartMenu.png';
import likeMenu from '../../../assets/img/likeMenu.png';
import styles from './gallery.module.scss';


const controlMenu = [
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


const Gallery = () => {
  var settings = {
    dots: true,
  };

  const [catImg, setCatImg] = React.useState([]);

  React.useEffect(() => {
    try {
      axios.get(`https://633db211f2b0e623dc79b585.mockapi.io/cats`).then((resp) => {
        const data = resp.data;
        console.log(data);
        setCatImg(data);
      });
    } catch (error) {
      console.log(error + 'Header');
    }
  }, []);

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
          <Slider {...settings}>
            {catImg.map((items, index) => (
              // @ts-ignore
              <GalleryItem key={index} {...items} />
            ))}
          </Slider>
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