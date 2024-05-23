import React, { useRef, useEffect } from "react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slider_container from "./Slider_container";
import image1 from "../images/people-removebg-preview.png";
import image2 from "../images/pexels-fauxels-3184405.png";
import image3 from "../images/pexels-chetanvlad-2923156.png";
import image4 from "../images/pexels-fauxels-3184405.png";
import image5 from "../images/pexels-fauxels-3182812-removebg-preview.png";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  const swiperRef = useRef(null);
  const wordsArray = useTypewriter({
    words: ['Welcome to TechFacilitators.', 'Need a Physical Or Remote Developer?', 'Need to upgrade your current Stack?', 'Need a Team?'],
    loop: {},
    typeSpeed: 120,
});

  useEffect(() => {
    swiperRef.current = new SwiperCore(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Clean up Swiper instance when component unmounts
    return () => {
      swiperRef.current.destroy();
    };
  }, []);

  return (
          <Slider_container
            header_text={wordsArray[0]}
            body_text=""
            bg_className="third_slider"
            image_url= {image1}
            buttonClass="signUpBtn"
          />
        
  );
};

export default Slider;
