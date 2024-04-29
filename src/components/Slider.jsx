import React, { useRef, useEffect } from "react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slider_container from "./Slider_container";

SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  const swiperRef = useRef(null);

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
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <Slider_container
            header_text="Get valuable tech training and secure positions within leading global technology firms."
            body_text=""
            bg_className="first_slider"
            image_url= "https://a.storyblok.com/f/199879/2068x1430/c16cfd6eee/pose-3.png/m/"
            buttonClass="signUpBtn"
          />
        </div>
        <div className="swiper-slide">
          <Slider_container
            header_text="Get trained by world class tutors with industry experience"
            body_text="Our tutors are carefully selected industry specialist with extensive academia experience."
            bg_className="second_slider"
            image_url= "https://a.storyblok.com/f/199879/1557x1078/8ca5c4763d/oblong-3.png/m/"
            buttonClass="enrollBtn"
          />
        </div>
        <div className="swiper-slide">
          <Slider_container
            header_text="Create the future you see"
            body_text="Upskill and get positioned for impact in the world of Tech. "
            bg_className="third_slider"
            image_url= "https://a.storyblok.com/f/199879/2354x1682/38fbb09c68/hero.png/m/"
            buttonClass="signUpBtn"
          />
        </div>
        {/* <div className="swiper-pagination"></div> */}
      </div>
    </div>
  );
};

export default Slider;
