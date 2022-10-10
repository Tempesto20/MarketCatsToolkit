import React from "react";
import { Link } from 'react-router-dom';
import styles from './favoriteCats.module.scss';

const FavoriteCats=()=> {
  return (
    <div className="">
  <div className={styles.wrapper}>
    Фавориты котики
  </div>
  <Link to='/'  className="">
    Вернуться назад
  </Link>
  </div>
  )
}

export default FavoriteCats;
