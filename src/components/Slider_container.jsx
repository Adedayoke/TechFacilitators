import React from 'react'
import Button from './Button'

const Slider_container = ({header_text, body_text, bg_className, image_url, buttonClass}) => {
  return (
    <div className="carousel">
            <div className="carousel__viewport">
              <div className="carousel__track">
                <div className="carousel__slide">
                  <div className={`${bg_className}  hero`}>
                    <div className="container">
                      <div className="inner__wrapper">
                        <div className="content">
                          <h1>
                          {header_text}
                          </h1>
                          <p>
                           { body_text}
                          </p>
                          <a
                            className=""
                            href="https://student-dashboard.aiti.ng/signUp"
                          >
                            <Button className={`${buttonClass}`}>
                              Enroll Now
                            </Button>
                          </a>
                        </div>
                        <div className="img-container">
                          <img
                            src= {image_url}
                            alt="Three people"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Slider_container