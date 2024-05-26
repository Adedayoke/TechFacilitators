import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import image1 from "../assets/industry_projects_clp_1.png";
import image2 from "../assets/industry_projects_clp_2.png";
import { allCourses } from "../utilities/AllCourses";
import { useParams } from "react-router-dom";
// import image3 from "../assets/man explaining.jpg";

const CoursePricing = () => {
  const {id} = useParams();
  const [currentPage, setCurrentPage] = useState(-1);
  const [currentDesc, setCurrentDesc] = useState(-1);
  const [currentDesign, setCurrentDesign] = useState("");
  const [startCurriculumView, setstartCurriculumView] = useState(0);
  const [startDescriptionView, setstartDescriptionView] = useState(0);
  const currentCourse = allCourses.find((item)=> item.id === id);
  const [curriculum_view, setcurriculum_view] = useState(0);
  const [description_view, setdescription_view] = useState(0);
  const setPage = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    } else {
      setCurrentPage(-1);
    }
  };
  const setDesc = (desc) => {
    if (desc !== currentDesc) {
      setCurrentDesc(desc);
    } else {
      setCurrentDesc(-1);
    }
  };
  const setDesign = (design) => {
      setCurrentDesign(design);
  };
  const setViewMoreCurriculum = (view)=>{

  setstartCurriculumView(view);
  setcurriculum_view(currentCourse?.displayComponent?.curriculum.length);
  }
  const setViewMoreDescription = (view)=>{

    setstartDescriptionView(view);
    setdescription_view(currentCourse?.displayComponent?.course_description.length);
  }
  const setViewLessCurriculum = ()=>{

  setstartCurriculumView(0);
  setcurriculum_view(Math.round(currentCourse?.displayComponent?.curriculum?.length / 2));
  }
  const setViewLessDescription = ()=>{

    setstartDescriptionView(0);
    setdescription_view(Math.round(currentCourse?.displayComponent?.course_description?.length / 2));
  }
  useEffect(()=>{
    // setAllCurriculum(currentCourse?.displayComponent?.curriculum);
    setCurrentDesign(currentCourse?.displayComponent?.related_courses[0]?.name);
    setcurriculum_view(Math.round(currentCourse?.displayComponent?.curriculum?.length / 2));
    setdescription_view(Math.round(currentCourse?.displayComponent?.course_description?.length / 2));
    
  }, [id])
  console.log(curriculum_view)
  console.log(startCurriculumView)
  return (
    <div className="course_pricing">
      <div className="course_pricing--header">
        <h1>{currentCourse.courseName} Certification</h1>
        <br />
        <div>
          <button className="header-btn1">
            <span><FaUser /></span> <span> {currentCourse?.displayComponent?.no_of_learners} </span> Learners
          </button>
          <button className="header-btn1">
            <span><IoIosStar /></span> <span> {currentCourse?.displayComponent?.rating} </span> {currentCourse?.displayComponent?.no_of_ratings} Ratings
          </button>
        </div>
        <br />
        <div className="course_pricing--header-flex1">
          <div className="left">
            <div className="img"></div>
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
        <h1>Why choose {currentCourse.courseName} Training?</h1>
        <br />
        <br />
        <div className="sect1--grid">
          {currentCourse?.displayComponent?.why_enroll?.map((reason)=>{
            return(
              <div className="course_card">
            <div className="course_card--image">
              <GrLineChart />
            </div>
            <p>
              {reason.text}
            </p>
          </div>
            )
          }) }
        </div>
      </section>
      <section className="sect2">
        <h1>{currentCourse.courseName} Training Benefits</h1>
        <br />
        <br />
        <p>
         {currentCourse?.displayComponent?.training_benefits}
        </p>
        <br />
        <br />
        <div className="sect2--nav">
          <h2>Designations</h2>
          <ul>
            {currentCourse?.displayComponent?.related_courses.map((course)=>{
              return(
                <li onClick={()=>setDesign(course.name)} className={currentDesign === course.name && "active"}>{course.name}</li>
              )
            })
          }
          </ul>
        </div>
        <br />
        <br />
        <div className="sect2--body">
          <div>
            <div className="left">
              <img src="" alt="" />
            </div>
            <div className="right">
              <img src="" alt="" />
            </div>
          </div>
          <div className="sect2--body-footer">
            <h2>Want to become a {currentCourse?.jobtitle}?</h2>
            <button>Enroll Now</button>
          </div>
        </div>
      </section>
      <section className="sect3">
        <h1>Why {currentCourse.courseName} Training from Tech Facilitators</h1>
        <br />
        <br />
        <div className="sect3--grid">
          <div
            className="card_whytf
          "
          >
            <div className="card_whytf--header">
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
            <div className="card_whytf--header">
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
            <div className="card_whytf--header">
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
            <div className="card_whytf--header">
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
            <div className="card_whytf--header">
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
            className="card_whytf last_card
          "
          >
            <p>Like what you heart feom our learners?</p>
            <h2>Take the First Step</h2>
            <button>Drop us a query</button>
          </div>
        </div>
      </section>
      <section className="sect4">
        <h2>About your {currentCourse.courseName} Training</h2>
        <br />
        <h1>Skills Covered</h1>
        <br />
        <br />
        <div className="sect4--grid">
          {currentCourse?.displayComponent?.skills_covered.map((skill)=>{
            return(
              <p>
                <span>
                  <FaCheckCircle />
                </span>
                {skill}
              </p>
            )
          })}
        </div>
        <br />
        <h1>Tools Covered</h1>
        <br />
        <br />
        <div className="toolsCovered">
          <ul>
            {currentCourse?.displayComponent?.tools_covered.map((tool)=>{
              return(
                <li>
              <img src={tool} alt="" />
            </li>
              )
            })}
          </ul>
        </div>
      </section>
      <section className="sect5">
        <h2>{currentCourse.courseName} Certification Training Course Curriculum</h2>
        <br />
        <h1>
          Curriculum Designed by Experts
        </h1>
        <br />
        <br />
        <div className="sect5--topicsCont">
          {
            currentCourse?.displayComponent?.curriculum.slice(startCurriculumView, curriculum_view).map((curriculum_topic)=>{
              return(
                <div
            onClick={() => setPage(currentCourse?.displayComponent?.curriculum.indexOf(curriculum_topic))}
            className={
              currentPage !== currentCourse?.displayComponent?.curriculum.indexOf(curriculum_topic) ? "drop_down" : "drop_down activeContent"
            }
          >
            <div className="drop_down--header topic">
              <p>{curriculum_topic.title}</p>
              <div>
                <span className="topic--no">{curriculum_topic.no_of_topics} topics</span>
                <span
                  className={`rotate ${
                    currentPage === currentCourse?.displayComponent?.curriculum.indexOf(curriculum_topic) && "rotate-active"
                  }`}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </div>
            <div className="drop_down--content">
              <br />
              <h2>Topics</h2>
              <br />
              <ul>
                {curriculum_topic?.topic_list.map((topic_list)=>{
                  return(
                    <li>{topic_list}</li>
                  )
                })}
              </ul>
            </div>
          </div>
              )
            })
          }
          {
          startCurriculumView === 0?
            <button onClick={()=>setViewMoreCurriculum(curriculum_view)}>View More</button>:
            <button onClick={()=>setViewLessCurriculum()}>View Less</button>
          }
        </div>
      </section>
      <section className="sect6">
        <h1>{currentCourse.courseName} Certification Course Description</h1>
        <br />
        <br />
        <div>
          <div className="sect6--descCont">
            { currentCourse?.displayComponent?.course_description.slice(startDescriptionView, description_view).map((description)=>{
              return(
                <div
              onClick={() => setDesc(currentCourse?.displayComponent?.course_description.indexOf(description))}
              className={
                currentDesc !== currentCourse?.displayComponent?.course_description.indexOf(description) ? "drop_down" : "drop_down activeContent"
              }
            >
              <div className="drop_down--header topic">
                <p>{description.title}</p>
                <div>
                  <span
                    className={`rotate ${
                      currentDesc === currentCourse?.displayComponent?.course_description.indexOf(description) && "rotate-active"
                    }`}
                  >
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
              </div>
              <div className="drop_down--content">
                <p>{description.content}</p>
              </div>
            </div>
              )
            })}
            {
          startDescriptionView === 0?
            <button onClick={()=>setViewMoreDescription(description_view)}>View More</button>:
            <button onClick={()=>setViewLessDescription()}>View Less</button>
          }
          </div>
        </div>
      </section>
      <section className="sect7">
        <h2>React Certification Training Course Projects</h2>
        <br />
        <br />
        <div className="sect7--gridCont">
          {currentCourse?.displayComponent?.projects.map((project)=>{
            return(
              <div className="project">
            <div>
              <img src={project.image} alt="" />
            </div>
            <h1>Industry: {project.industry}</h1>
            <p>{project.content}</p>
          </div>
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default CoursePricing;
