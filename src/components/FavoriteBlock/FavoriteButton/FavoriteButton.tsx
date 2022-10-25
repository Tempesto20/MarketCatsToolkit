import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import like from '../../../assets/svg/likeIcon.svg';
import styles from './favoriteButton.module.scss';

const FavoriteButton: React.FC = () => {
  const items = useSelector((state: RootState) => state.favoriteSlice.items);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
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
