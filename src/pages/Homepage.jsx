import React, { useContext, useEffect, useRef, useState } from "react";
import image1 from "../images/pexels-fauxels-3182812.jpg";
import image2 from "../images/Backend.svg";
import image3 from "../images/Product_Management.svg";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/animation4.json";
import styled from "styled-components";
import { PageContext } from "../context/PageContext";
import { useHref } from "react-router-dom";

const Homepage = () => {
  const [isVisible, setisVisible] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const page = useContext(PageContext)
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries, cardObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardObserver.observe(ref1.current);
    cardObserver.observe(ref2.current);
    cardObserver.observe(ref3.current);
    cardObserver.observe(ref4.current);
    cardObserver.observe(ref5.current);
    cardObserver.observe(ref6.current);
    cardObserver.observe(ref7.current);
    cardObserver.observe(ref8.current);
    cardObserver.observe(ref9.current);
    cardObserver.observe(ref10.current);
  }, []);
  const animation4 = useRef < LottieRefCurrentProps > null;

  const currentUrl = useHref();
  let state = currentUrl == "/"
  page.setState(state)
  console.log(page)

  return (
    <div className="homePage">
      <Slider />
      <section className="homePage-cont">
        <section className="how_it_works">
          <div className="how_it_works_grid">
            <div
              ref={ref1}
              className={`col col_text col_text_odd col_left ${
                isVisible ? "animate" : ""
              }`}
            >
              <h1>Engage in Dynamic Live Classes</h1>
              <p>
                Immerse yourself in interactive learning experiences with our
                live classes. Participate in real-time discussions, ask
                questions, and receive instant feedback from expert instructors,
                all from the comfort of your own space.
              </p>
            </div>
            <div ref={ref2} className={`col ${isVisible ? "animate" : ""}`}>
              <Lottie
                className="col_image"
                lottieRef={animation4}
                animationData={animationData}
                loop={true}
              />
            </div>

            <div
              ref={ref3}
              className={`col col_left ${isVisible ? "animate" : ""}`}
            >
              <img src={image2} alt="" />
            </div>
            <div
              ref={ref4}
              className={`col col_text ${isVisible ? "animate" : ""}`}
            >
              <h1>Transform into a Versatile Developer, Anywhere</h1>
              <p>
                Whether you prefer on-site collaboration or remote work, our
                programs cater to both physical and remote developers. Gain the
                skills and flexibility needed to thrive in any environment and
                excel in your development career, no matter where you are.
              </p>
            </div>

            <div
              ref={ref5}
              className={`col col_text col_text_odd col_left ${
                isVisible ? "animate" : ""
              }`}
            >
              <h1>Transition into an Instructor Role</h1>
              <p>
                Ready to share your expertise and inspire others? Join our team
                and embark on a fulfilling journey as an instructor. Leverage
                your knowledge and passion to guide aspiring learners towards
                success while shaping the next generation of professionals.
              </p>
            </div>
            <div ref={ref6} className={`col ${isVisible ? "animate" : ""}`}>
              <img src={image3} alt="" />
            </div>
            <div
              ref={ref7}
              className={`col col_left ${isVisible ? "animate" : ""}`}
            >
              <img src={image2} alt="" />
            </div>
            <div
              ref={ref8}
              className={`col col_text ${isVisible ? "animate" : ""}`}
            >
              <h1>Elevate Your Tech Stack with Advanced Training</h1>
              <p>
                Stay ahead of the curve in the rapidly evolving tech landscape.
                Upgrade your skill set with our advanced training programs
                designed to equip you with the latest tools and techniques.
                Empower yourself to tackle complex challenges and excel in your
                field.
              </p>
            </div>

            <div
              ref={ref9}
              className={`col col_text col_text_odd col_left ${
                isVisible ? "animate" : ""
              }`}
            >
              <h1>Build Your Dream Team</h1>
              <p>
                Achieve greatness together by assembling a skilled and cohesive
                team. Whether you're starting from scratch or looking to enhance
                your existing lineup, we provide the resources and support you
                need to form a high-performing team capable of tackling any
                project.
              </p>
            </div>
            <div ref={ref10} className={`col ${isVisible ? "animate" : ""}`}>
              <img src={image1} alt="" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Homepage;
