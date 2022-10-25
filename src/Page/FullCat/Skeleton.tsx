import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './skeleton.module.scss';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={1280}
    height={500}
    viewBox="0 0 1280 500"
    backgroundColor="#f3f1f1"
    foregroundColor="#ecebeb">
    <rect x="640" y="100" rx="0" ry="0" width="180" height="40" />
    <rect x="640" y="160" rx="0" ry="0" width="240" height="40" />
    <rect x="640" y="240" rx="0" ry="0" width="600" height="160" />
    <rect x="640" y="460" rx="0" ry="0" width="215" height="32" />
    <rect x="20" y="100" rx="0" ry="0" width="600" height="400" />
  </ContentLoader>
);

export default Skeleton;

{
  /* <ContentLoader 
speed={2}
width={1200}
height={520}
viewBox="0 0 1200 520"
backgroundColor="#f3f1f1"
foregroundColor="#ecebeb"
className={styles.skeleton}
>
<rect x="0" y="-1" rx="0" ry="0" width="1200" height="480" /> 
<circle cx="160" cy="506" r="4" /> 
<circle cx="206" cy="506" r="4" /> 
<circle cx="249" cy="506" r="4" /> 
<circle cx="296" cy="506" r="4" /> 
<circle cx="338" cy="506" r="4" /> 
<circle cx="423" cy="506" r="4" /> 
<circle cx="106" cy="506" r="4" /> 
<circle cx="46" cy="506" r="4" /> 
<circle cx="471" cy="506" r="4" /> 
<circle cx="513" cy="506" r="4" /> 
<circle cx="556" cy="506" r="4" /> 
<circle cx="376" cy="506" r="4" /> 
<circle cx="272" cy="507" r="2" />
</ContentLoader> */
}

{
  /* <ContentLoader 
speed={2}
width={1200}
height={500}
viewBox="0 0 1200 500"
backgroundColor="#f3f1f1"
foregroundColor="#ecebeb"
className={styles.skeleton}
>
<rect x="0" y="0" rx="0" ry="0" width="1200" height="500" />
</ContentLoader> */
}
