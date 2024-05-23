import React from "react";
import Button from "./Button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Globe from "./Globe";

const Slider_container = ({
  header_text,
  body_text,
  bg_className,
  image_url,
  buttonClass,
}) => {
  const wordsArray = useTypewriter({
    words: [
      "Welcome to TechFacilitators.",
      "Need a Physical Or Remote Developer?",
      "Need to upgrade your current Stack?",
      "Need a Team?",
    ],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <div className={`${bg_className}  hero`}>
      <div className="container">
        <div className="inner__wrapper">
          <div className="content">
            <h1>
              {header_text}
              <Cursor />
            </h1>

            <a className="" href="https://student-dashboard.aiti.ng/signUp">
              <Button children={"Enroll Now"} className={`${buttonClass}`} />
            </a>
          </div>
          <div className="img-container">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider_container;
