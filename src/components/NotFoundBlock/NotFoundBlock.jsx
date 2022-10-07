import React from "react";
import smail from './cat.jpg';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock =()=> {
  return( 
  <>
    <h1 className={styles.root}>
      <span> <img src={smail} alt=''/></span>
      <br />
      Ничего не найдено :(
    </h1>
    <p className={styles.description}>Извините</p>
  </>
  );
}

export default NotFoundBlock;
