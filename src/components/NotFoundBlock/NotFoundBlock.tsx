import React from 'react';
import { Link } from 'react-router-dom';
import pain from './pain.jpg';
import home from './home.png';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Ничего не найдено</div>
          <div className={styles.pain}></div>
          <img src={pain} alt="" className={styles.painImg}/>
          <p className={styles.description}>Извините</p>
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

export default NotFoundBlock;
