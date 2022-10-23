import React from "react"
import ContentLoader from "react-content-loader"

import styles from './skeleton.module.scss';

const Skeleton = () => (


  <ContentLoader 
    speed={2}
    width={1000}
    height={500}
    viewBox="0 0 1200 500"
    backgroundColor="#f3f1f1"
    foregroundColor="#ecebeb"
    className={styles.skeleton}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1200" height="500" />
  </ContentLoader>




)

export default Skeleton;
