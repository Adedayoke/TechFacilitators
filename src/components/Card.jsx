import React from 'react'
import image1 from "../images/Backend.svg"
import { Link } from 'react-router-dom'

const Card = ({courseName, id, content, summary}) => {
  console.log(content)
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
            <Link to={`/coursepricing:${id}`}><button className='learn'>Learn More</button></Link>
        </div>
    </div>
  )
}

export default Card