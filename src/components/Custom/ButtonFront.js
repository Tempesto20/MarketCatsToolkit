import React from 'react';
import styles from './buttonFront.module.scss';
function ButtonFront(props) {
  return (
    <button type={props.type} className={styles.qw}>
      {props.children}
    </button>
  );
}

export default ButtonFront;
