import React from 'react';
import { Link } from 'react-router-dom';
import pain from '../../assets/img/pain.jpg';
import ButtonMenu from '../Custom/ButtonMenu/ButtonMenu';
import homeMenu from '../../assets/img/homeMenu.png';
import cartMenu from '../../assets/img/cartMenu.png';
import likeMenu from '../../assets/img/likeMenu.png';

import styles from './NotFoundBlock.module.scss';

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
const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Ничего не найдено</div>
          <div className={styles.pain}></div>
          <img src={pain} alt="" className={styles.painImg} />
          <p className={styles.description}>Извините</p>

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

export default NotFoundBlock;
