import React from 'react';
//import ReactDOM from 'react-dom';

import './styles.scss';
import SideBar from './sidebar';

function BurgerMenu() {
  return (
    <div id="Burger">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'Burger'} />

      <div id="page-wrap"></div>
    </div>
  );
}

export default BurgerMenu;
