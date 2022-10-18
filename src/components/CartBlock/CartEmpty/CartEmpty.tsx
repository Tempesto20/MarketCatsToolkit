import React from 'react';
import { Link } from 'react-router-dom';
import cartEmpty from './cat2.jpg';
import home from './home.png';
import styles from './cartEmpty.module.scss';

const CartEmpty: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Корзина пустая</div>

          <div className={styles.header}>
            <p className={styles.title}>Вероятней всего, вы не выбрали себя любимца.</p>
            <p className={styles.subtitle}>
              Для того, чтобы заказать котёнка, перейди на главную страницу.
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
};

export default CartEmpty;
