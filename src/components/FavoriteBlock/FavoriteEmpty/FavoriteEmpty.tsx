import React from 'react';
import { Link } from "react-router-dom";
import cartEmpty from './emptyCat2.png';
import home from './home.png';
import styles from './favoriteEmpty.module.scss';

const FavoriteEmpty: React.FC =()=> {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Вы не добавил в избрнанные котиков</div>

          <div className={styles.header}>
            <p className={styles.title}>Вероятней всего, вы не выбрали себе любимца.</p>
            <p className={styles.subtitle}>
            Для того, чтобы выбрать любимца, перейди на главную страницу и нажмите на лайк по понравившемуся котику.
            </p>
          </div>
          <img src={cartEmpty} alt="Empty cart" className={styles.cartEmpty} />

          <Link to="/">
            <div className={styles.buttonHome}>
              <img src={home} alt="" className={styles.home} />
              <div className={styles.backHome}>Перейти в главное меню</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FavoriteEmpty;
