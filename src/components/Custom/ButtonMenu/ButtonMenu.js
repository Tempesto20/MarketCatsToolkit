import React from 'react';
import styles from './buttonMenu.module.scss';
function ButtonMenu(props) {
  return (
    <div type={props.type} className={styles.buttonTitle}>
      {props.children}
    </div>
  );
}

export default ButtonMenu;
