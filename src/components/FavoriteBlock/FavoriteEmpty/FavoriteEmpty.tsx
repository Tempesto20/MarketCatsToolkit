import React from 'react';
import { Link } from 'react-router-dom';
import ButtonMenu from '../../Custom/ButtonMenu/ButtonMenu';
import cartEmpty from '../../../assets/img/emptyFavorite.png';
import homeMenu from '../../../assets/img/homeMenu.png';
import cartMenu from '../../../assets/img/cartMenu.png';
import likeMenu from '../../../assets/img/likeMenu.png';
import styles from './favoriteEmpty.module.scss';

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

const FavoriteEmpty: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Вы не добавил в избрнанные котиков</div>

          <div className={styles.header}>
            <p className={styles.title}>Вероятней всего, вы не выбрали себе любимца.</p>
            <p className={styles.subtitle}>
              Для того, чтобы выбрать любимца, перейди на главную страницу и нажмите на лайк по
              понравившемуся котику.
            </p>
          </div>
          <img src={cartEmpty} alt="Empty cart" className={styles.cartEmpty} />

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
    </div>
  );
};

export default FavoriteEmpty;
