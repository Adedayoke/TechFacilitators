import React from "react";
import Navbar from "../components/Navbar";
import Typing_text from "../components/Typing_text";
import Slider from "../components/Slider";
import image1 from "../images/mobile.png";
import image2 from "../images/Backend.svg";
import image3 from "../images/Product_Management.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const cardContent = [
    {
      name: "Front-end Web Development",
      content:
        "Learn Complete Front-end web development by the  best instructor along side with projects Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus....Read more",
      imageUrl: image1,
      id: 1
    },
    {
      name: "Back-end Web Development",
      content:
        "Learn Complete Back-end Web Development by the  best instructor along side with projects Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus....Read more",
      imageUrl: image2,
      id: 2
    },
    {
      name: "Full Stack Web Development",
      content:
        "Learn Full Stack Web Development by the  best instructor along side with projects Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus....Read more",
      imageUrl: image3,
      id: 3
    },
    {
      name: "Mobile Development",
      content:
        "Learn Mobile Development by the  best instructor along side with projects Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus....Read more",
      imageUrl: image1,
      id: 4
    },
    {
      name: "Mobile Development",
      content:
        "Learn Mobile Development by the  best instructor along side with projects Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus....Read more",
      imageUrl: image1,
      id: 5
    },
    {
      name: "Mobile Development",
      content:
        "Learn Mobile Development by the  best instructor along side with projects Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus....Read more",
      imageUrl: image1,
      id: 6
    },
    {
      name: "Mobile Development",
      content:
        "Learn Mobile Development by the  best instructor along side with projects Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, repellendus....Read more",
      imageUrl: image1,
      id: 7
    },
  ];

  return (
    <div className="homePage">
      <Navbar />
      <Typing_text />
      <Slider />
      <section className="homePage-cont">
        <h1>
          <span>Services</span>
        </h1>
        <div className="homePage-cont_body">
          <div className="gridCont">
            {cardContent.map((item) => {
              return (
                <div className="card_col">
                  <div className="gridCont--card">
                    <img src={item.imageUrl} alt="" />
                    <h1>{item.name}</h1>
                    <p>{item.content}</p>
                    <div className="enrollBtn_class">
                        <span><Link to={`/pricing/${item.id}`}>Enroll</Link></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
