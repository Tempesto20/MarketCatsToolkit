import React from 'react';
import { Link } from "react-router-dom";
import cartEmpty from './cat2.jpg';
import styles from './cartEmpty.module.scss';

const CartEmpty: React.FC =()=> {
  return (
      <div className={styles.container}>
        <div className="cart cart--empty">
          <h2>
            Корзина пустая 
          </h2>
          <p>
            Вероятней всего, вы не выбрали себя любимца.
            <br />
            Для того, чтобы заказать котёнка, перейди на главную страницу.
          </p>
          <img src={cartEmpty} alt="Empty cart" />
          <Link to="/" className={styles.lol}>
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
  );
}

export default CartEmpty;
