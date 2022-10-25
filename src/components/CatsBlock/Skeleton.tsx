import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './skeleton.module.scss';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={380}
    height={500}
    viewBox="0 0 380 500"
    backgroundColor="#f3f1f1"
    foregroundColor="#ecebeb"
    className={styles.skeleton}>
    <rect x="0" y="11" rx="0" ry="0" width="380" height="253" />
    <rect x="-1" y="273" rx="0" ry="0" width="380" height="130" />
    <rect x="0" y="413" rx="30" ry="30" width="383" height="60" />
  </ContentLoader>
);

export default Skeleton;

{
  /* <ContentLoader 
speed={2}
width={280}
height={500}
viewBox="0 0 380 500"
backgroundColor="#f3f3f3"
foregroundColor="#ecebeb"
>
<rect x="0" y="0" rx="0" ry="0" width="280" height="220" /> 
<rect x="0" y="240" rx="0" ry="0" width="280" height="80" /> 
<rect x="0" y="350" rx="0" ry="0" width="280" height="52" /> 
<rect x="0" y="430" rx="32" ry="32" width="280" height="60" />
</ContentLoader> */
}

{
  /* <ContentLoader 
speed={2}
width={280}
height={500}
viewBox="0 0 280 500"
backgroundColor="#f3f3f3"
foregroundColor="#ecebeb"
className="windh"
>
<rect x="0" y="0" rx="0" ry="0" width="280" height="422" /> 
<rect x="0" y="423" rx="32" ry="32" width="280" height="60" />
</ContentLoader> */
}
