import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { GrLineChart } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
// import image3 from "../assets/man explaining.jpg";

const CoursePricing = () => {
  return (
    <div className="course_pricing">
      <div className="course_pricing--header">
        <h1>React.js Training Course Certification</h1>
        <div>
          <button>
            <CiUser /> 17897 Learners{" "}
          </button>
          <button>
            <IoIosStar /> 4.7 7200 Ratings{" "}
          </button>
        </div>
        <div className="course_pricing--header-flex1">
          <div className="left">
            <div className= "img"></div>
            <div></div>
          </div>
          <div className="right">
            <p className="right_about">
              The Tech Facilitators React Certification Training equips you with
              the skills to develop efficient React applications, guiding you
              through mastering React, Redux, and React Native concepts. Through
              this Advanced React Course, you'll delve into creating basic
              components and seamlessly incorporating them into intricate design
              structures. By the end of this online training, you'll
              proficiently utilize React principles like JSX, Redux,
              Asynchronous Programming with Redux-Saga middleware, GraphQL for
              data retrieval, Jest for testing, and adeptly deploying
              applications with Nginx and Docker. Additionally, you'll gain
              expertise in crafting mobile applications using React Native.
            </p>
            <p>Live Online Classes starting on 8th jun 2024</p>
            <div className="btnCont">
              <button className="btn1">Enroll now</button>
              <button className="btn2">Download Curriculum</button>
            </div>
          </div>
        </div>
      </div>

      <section className="sect1">
        <h1>Why choose React JS Training?</h1>
        <br />
        <br />
        <div className="sect1--grid">
          <div className="course_card">
            <div className="course_card--image">
              <GrLineChart />
            </div>
            <p>
              Major apps like Facebook, Instagram, Netflix, WhatsApp, Airbnb,
              Yahoo! Mail and many more use React to build their User Interface
              to improve user experience
            </p>
          </div>
          <div className="course_card">
            <div  className="course_card--image">
              <GrLineChart />
            </div>
            <p>
              Major apps like Facebook, Instagram, Netflix, WhatsApp, Airbnb,
              Yahoo! Mail and many more use React to build their User Interface
              to improve user experience
            </p>
          </div>
          <div className="course_card">
            <div className="course_card--image">
              <GrLineChart />
            </div>
            <p>
              Major apps like Facebook, Instagram, Netflix, WhatsApp, Airbnb,
              Yahoo! Mail and many more use React to build their User Interface
              to improve user experience
            </p>
          </div>
          
        </div>
      </section>
      <section className="sect2">
        <h1>React Training Benefits</h1>
        <br />
        <br />
        <p>
          React development stands out as the future of web creation, offering
          unparalleled versatility and simplicity. According to a Statista
          study, React JS reigns as the most sought-after web framework in 2022,
          with 40.41% of global software developers opting for it in their web
          application development. This trend isn't unexpected, given the steady
          rise in demand for React developers in recent years. Mastering React
          not only expands job opportunities and enhances pay prospects but also
          connects you with a vast and supportive community.
        </p>
        <br />
        <br />
        <div className="sect2--nav">
          <h2>Designations</h2>
          <ul>
            <li className="active">Front-end Engineer</li>
            <li>React Developer</li>
            <li>Front-end Developer</li>
          </ul>
        </div>
        <div>
          <div>
            <div className="left">
              <img src="" alt="" />
            </div>
            <div className="right">
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <p>Want to become a Frontend Developer?</p>
            <button>Enroll Now</button>
          </div>
        </div>
      </section>
      <section>
        <h1>Why React JS Training from Tech Facilitators</h1>
        <div className="gridCont">
          <div
            className="card_whytf
          "
          >
            <div>
              <img src="" alt="" />
              <span>Live Interactive Learning</span>
            </div>
            <ul>
              <li>World-Class Instructors</li>
              <li>Expert-Led Mentoring Sessions</li>
              <li>Instant doubt clearing</li>
            </ul>
          </div>
          <div
            className="card_whytf
          "
          >
            <div>
              <img src="" alt="" />
              <span>Lifetime Access</span>
            </div>
            <ul>
              <li>World-Class Instructors</li>
              <li>Expert-Led Mentoring Sessions</li>
              <li>Instant doubt clearing</li>
            </ul>
          </div>
          <div
            className="card_whytf
          "
          >
            <div>
              <img src="" alt="" />
              <span>24x7 support</span>
            </div>
            <ul>
              <li>World-Class Instructors</li>
              <li>Expert-Led Mentoring Sessions</li>
              <li>Instant doubt clearing</li>
            </ul>
          </div>
          <div
            className="card_whytf
          "
          >
            <div>
              <img src="" alt="" />
              <span>Hands-On Project Based Learning</span>
            </div>
            <ul>
              <li>World-Class Instructors</li>
              <li>Expert-Led Mentoring Sessions</li>
              <li>Instant doubt clearing</li>
            </ul>
          </div>
          <div
            className="card_whytf
          "
          >
            <div>
              <img src="" alt="" />
              <span>Certification</span>
            </div>
            <ul>
              <li>World-Class Instructors</li>
              <li>Expert-Led Mentoring Sessions</li>
              <li>Instant doubt clearing</li>
            </ul>
          </div>
          <div
            className="card_whytf
          "
          >
            <p>Like what you heart feom our learners?</p>
            <h2>Take the First Step</h2>
            <button>Drop us a query</button>
          </div>
        </div>
      </section>
      <section>
        <h2>About your React Js Training</h2>
        <h1>Skills Covered</h1>
        <div>
          <p>React Components</p>
          <p>React React State Management</p>
          <p>React Event Handling</p>
          <p>Routing in React</p>
          <p>React Application Testing</p>
          <p>React Native</p>
        </div>
        <h1>Tools Covered</h1>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h2>React JS Certification Training Course Curriculum</h2>
        <h1>
          Curriculum Designes by Experts <span>Download Curriculum</span>
        </h1>
        <div>
          <div className="drop_down topic">
            <p>Introduction to Web Development and React</p>
            <div>
              <span>12 topics</span>
              <span>^</span>
            </div>
          </div>
          <div className="drop_down topic">
            <p>Introduction to Web Development and React</p>
            <div>
              <span>12 topics</span>
              <span>^</span>
            </div>
          </div>
          <div className="drop_down topic">
            <p>Introduction to Web Development and React</p>
            <div>
              <span>12 topics</span>
              <span>^</span>
            </div>
          </div>
          <div className="drop_down topic">
            <p>Introduction to Web Development and React</p>
            <div>
              <span>12 topics</span>
              <span>^</span>
            </div>
          </div>
          <div className="drop_down topic">
            <p>Introduction to Web Development and React</p>
            <div>
              <span>12 topics</span>
              <span>^</span>
            </div>
          </div>
          <button>View Less</button>
        </div>
      </section>
      <section>
        <h1>React Certification Course Description</h1>
        <div className="drop_down">
          <p>About React Course</p>
          <p>About React Course</p>
          <p>About React Course</p>
          <p>About React Course</p>
          <p>About React Course</p>
          <p>About React Course</p>
          <p>About React Course</p>
        </div>
      </section>
      <section>
        <h1>React Certification Training Course Projects</h1>
        <div>
          <div className="project">
            <div>
              <img src="" alt="" />
            </div>
            <h1>Industry: Entertainment</h1>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePricing;
