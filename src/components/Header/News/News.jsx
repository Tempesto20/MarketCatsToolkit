import React from "react";
import styles from './news.module.scss';
function News()  {
  return( 
  <div className={styles.wrapper}>
    <div className={styles.head}>
      <div className="">
    Шапка News
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

export default News;
