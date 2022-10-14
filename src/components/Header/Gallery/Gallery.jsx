import React from "react";
import styles from './gallery.module.scss';
function Gallery() {
  return( 
  <div className={styles.wrapper}>
    <div className={styles.head}>
      <div className="">
    Шапка Gallery
      </div>

      <div className={styles.middle}>
        <div className="">
          тело
        </div>
        <div className="">

        </div>
      </div>

      <div className={styles.bottom}>
        <div className="">
          боттом
        </div>
      </div>

    </div>
  </div>
);
}

export default Gallery;
