import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/animation3.json";
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
