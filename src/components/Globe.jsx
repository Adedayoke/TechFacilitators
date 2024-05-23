// import React, { Suspense } from 'react';
// import styled from 'styled-components';
// import {Canvas} from '@react-three/fiber';
// import { Earth } from './earth';

// const CanvasContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   color: white;
// `;
// const Globe = () => {
//   return (
//     <CanvasContainer>
//       <Canvas>
//         <Suspense fallback={null}>
//           <Earth />
//         </Suspense>
//       </Canvas>
//     </CanvasContainer>
//   )
// };

// export default Globe;

import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/animation3.json";
import styled from "styled-components";
const Globe = () => {
  const animation1 = useRef<LottieRefCurrentProps>(null);
//   const AnimateCont = styled.div`
//   width: 80%
// height: 80%  `;
  return (
    // <AnimateCont className="headerAnimation">
      <Lottie
        
        lottieRef={animation1}
        animationData={animationData}
        loop={true}
      />
    // </AnimateCont>
  );
};

export default Globe;
