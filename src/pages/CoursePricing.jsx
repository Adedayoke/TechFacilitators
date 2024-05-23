import React, { useEffect, useState } from "react";
import image2 from "../images/Backend.svg";

const CoursePricing = () => {
  const [fixed_state, setfixedState] = useState(false);
  window.onscroll = function () {
    const presentView = document.documentElement.scrollTop;
    console.log(presentView);
    if (presentView > 390) {
      setfixedState(true);
    } else if (presentView < 390) {
      setfixedState(false);
    }
  };
  return (
    <div className="product_pricing">
      <div className="product_pricing--cont">
        <div className="product_header">
          <div className="product_intro-desc">
            <h1>Frontend Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              repellendus consectetur incidunt officiis, nemo culpa voluptas
              inventore natus perspiciatis modi dolorem reprehenderit distinctio
              labore explicabo suscipit odit, voluptatem quod molestiae.
            </p>
            <p>Instructor: Ajayi Victor Damilare</p>
            <div>
              <p>English</p>
            </div>
          </div>
        </div>
        <div className="product_body">
          <div className="product_body-section1 section">
            <h2>What you will learn.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              vero necessitatibus, esse excepturi voluptatibus exercitationem
              error recusandae sequi autem dolore accusantium fugiat ea.
              Voluptates vero corrupti dolor necessitatibus corporis numquam?
            </p>
          </div>
          <div className="product_body-section2 section">
            <h2>Content</h2>
            <div className="content_container">
                <div>
                  <h3>
                    <button>
                      <span>
                        <span>
                          Day 1 - Beginner - Working with Variables in Python to
                          Manage Data
                        </span>
                        <span>
                          17 lectures • <span>1hr 35min</span>
                        </span>
                      </span>
                    </button>
                  </h3>
                  <svg>
                  </svg>
                </div>
                <div aria-hidden="true">
                    <ul>
                      <li>
                        <div>
                          <div>
                            <div>
                              <div>
                                <button>
                                  <span>
                                    What you're going to get from this course
                                  </span>
                                </button>
                              </div>
                            </div>
                            <button>
                              <span>
                                Preview
                              </span>
                            </button>
                            <span>
                              03:27
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div
          className={
            fixed_state
              ? "product_overview overviewAnimationContf"
              : "product_overview"
          }
        >
          <img src={image2} alt="" />
          <h1>$100</h1>
          <button className="applyBtn">
            <h3>Apply</h3>
          </button>
          <h3>This course includes:</h3>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursePricing;
