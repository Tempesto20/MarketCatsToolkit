import React from "react";
import styles from './profile.module.scss';
function Profile()  {
  return( 
  <div className={styles.wrapper}>
    <div className={styles.head}>
      <div className="">
    Шапка Profile
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
export default Profile;
