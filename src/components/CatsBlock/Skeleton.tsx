import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (

<ContentLoader 
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
</ContentLoader>


)

export default Skeleton;


/*
<ContentLoader 
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
</ContentLoader>
*/

/*
  <ContentLoader 
    speed={2}
    width={260}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="260" height="422" /> 
    <rect x="0" y="433" rx="32" ry="32" width="260" height="60" />
  </ContentLoader>
  */


    // <ContentLoader 
  //   className="pizza-block"
  //   speed={2}
  //   width={380}
  //   height={400}
  //   viewBox="0 0 280 500"
  //   backgroundColor="#f3f3f3"
  //   foregroundColor="#ecebeb"
  // >
  //   <circle cx="134" cy="136" r="125" /> 
  //   <rect x="0" y="279" rx="10" ry="10" width="280" height="25" /> 
  //   <rect x="0" y="326" rx="10" ry="10" width="280" height="90" /> 
  //   <rect x="0" y="436" rx="10" ry="10" width="95" height="30" /> 
  //   <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
  // </ContentLoader>