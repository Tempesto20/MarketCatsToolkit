import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './galleryItem.module.scss';

function GalleryItem({ id, img }) {
  //   var settings = {
  //     dots: true,
  //   };
  // console.log(img)
  return (

      <div>
        <Link to={`/cat/${id}`} key={id}>
        <img src={img} className={styles.imgCat} />
        </Link>
      </div>

  );
}

export default GalleryItem;
