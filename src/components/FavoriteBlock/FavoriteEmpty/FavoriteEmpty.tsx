import React from 'react';
import { Link } from "react-router-dom";
import cartEmpty from './cat2.jpg';
import styles from './favoriteEmpty.module.scss';

const FavoriteEmpty: React.FC =()=> {
  return (
      <div className={styles.container}>
        <div className="cart cart--empty">
          <h2>
            Вы не добавил в избрнанные котиков
          </h2>
          <p>
            Вероятней всего, вы не выбрали себя любимца.
            <br />
            Для того, чтобы выбрать любимца, перейди на главную страницу.
          </p>
          <img src={cartEmpty} alt="Empty cart" />
          <Link to="/" className={styles.lol}>
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
  );
}

export default FavoriteEmpty;
