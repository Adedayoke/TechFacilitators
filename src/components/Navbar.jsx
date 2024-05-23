import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import PositionIndicator from "./PositionIndicator";
import logo from "../assets/logo.png"
import { PageContext } from "../context/PageContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [navState, setnavState] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      setScrollPosition(position);
      setMaxScroll(documentHeight - windowHeight);
      
      if (position > 80) {
        setnavState(false);
      } else {
        setnavState(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const indicatorPosition = (scrollPosition / maxScroll) * 100;
  const page = useContext(PageContext);
  const state = page.state
  return (
    <>
      <div className={ navState && state ? "navbar" : "navbar fixed"}>
        <PositionIndicator scrollPosition={indicatorPosition} />

        <div className="logoImg">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/profile">LevelUp</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/pricing">Take a Test</Link>
          </li>
          <li>
            <Link to="/contact">Job Offers</Link>
          </li>
        </ul>
        <div className="buttons">
          <Button children={"Sign up"} className={navState ? "signUpBtn" : "signUpBtn sgnBtnChange"} />
          <Button children={"Enroll Now"} className={navState ? "enrollBtn": "enrollBtn enrBtnChange"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
