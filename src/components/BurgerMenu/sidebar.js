import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/main">
        Main
      </Link>

      <Link className="menu-item" to="/gallery">
        Gallery
      </Link>

      <Link className="menu-item" to="/news">
        News
      </Link>

      <Link className="menu-item" to="/profile">
        Profile
      </Link>
    </Menu>
  );
};
