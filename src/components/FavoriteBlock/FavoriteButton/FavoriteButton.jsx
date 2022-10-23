import React from 'react';
import { useSelector } from 'react-redux';
import like from '../../../assets/svg/likeIcon.svg';
import styles from './favoriteButton.module.scss';

const FavoriteButton = () => {
  const items = useSelector((state) => state.favoriteSlice.items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardImg}>
        <img className={styles.icon} src={like} alt="" />

        <div className={styles.count}>
          <span className={styles.totalCount}>{totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteButton;
