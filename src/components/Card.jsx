import React from 'react'
import image1 from "../assets/man_explaining.jpg"
import { Link, NavLink } from 'react-router-dom'

const Card = ({courseName, id, content, summary}) => {
  return (
    <div className='card'>
        <div className="card_left">
            <div className="imageCont">
            <img src={image1} alt="" />
            </div>
        </div>
        <div className="card_right">
            <h1>{courseName}</h1>
            <ul>
              <p>{summary}</p>
                {content.map((item)=>{
                  return(
                    <li><span>{item.icon}</span>{item.text}</li>
                  )
                })}
            </ul>
            <NavLink to={`/coursepricing/${id}`}><button className='learn'>Learn More</button></NavLink>
        </div>
    </div>
  )
}

export default Card