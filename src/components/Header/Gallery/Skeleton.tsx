import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './skeleton.module.scss';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={520}
    viewBox="0 0 1200 520"
    backgroundColor="#f3f1f1"
    foregroundColor="#ecebeb"
    // className={styles.skeleton}
  >
    <rect x="0" y="-1" rx="0" ry="0" width="1200" height="480" />

    <circle cx="285" cy="506" r="4" />
    <circle cx="325" cy="506" r="4" />
    <circle cx="365" cy="506" r="4" />
    <circle cx="405" cy="506" r="4" />
    <circle cx="445" cy="506" r="4" />
    <circle cx="485" cy="506" r="4" />
    <circle cx="525" cy="506" r="4" />
    <circle cx="565" cy="506" r="4" />

    <circle cx="605" cy="506" r="4" />

    <circle cx="645" cy="506" r="4" />
    <circle cx="685" cy="506" r="4" />
    <circle cx="725" cy="506" r="4" />
    <circle cx="765" cy="506" r="4" />
    <circle cx="805" cy="506" r="4" />
    <circle cx="845" cy="506" r="4" />
    <circle cx="885" cy="506" r="4" />
    <circle cx="925" cy="506" r="4" />
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
