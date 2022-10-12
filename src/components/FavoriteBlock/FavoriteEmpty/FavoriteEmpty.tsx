import React from 'react';
import { Link } from "react-router-dom";
import cartEmpty from './emptyCat2.png';
import styles from './favoriteEmpty.module.scss';

const FavoriteEmpty: React.FC =()=> {
  return (
      <div className={styles.container}>
        <div className="cart cart--empty">
          <h2>
            Вы не добавил в избрнанные котиков
          </h2>
          <p>
            Вероятней всего, вы не выбрали себе любимца.
            <br />
            Для того, чтобы выбрать любимца, перейди на главную страницу и нажмите на лайк по понравившемуся котику.
          </p>
          <img src={cartEmpty} alt="Empty cart" className={styles.cartEmpty}/>
          <Link to="/" className={styles.lol}>
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
  );
}

export default FavoriteEmpty;
