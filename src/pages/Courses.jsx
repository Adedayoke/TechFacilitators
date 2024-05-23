import React from 'react';
import Card from '../components/Card';
import { allCourses } from '../utilities/AllCourses';


const Pricing = () => {
  return (
    <div className='courses'>
      {
        allCourses.map((item)=>{
          return(
            <Card summary={item.summary} courseName={item.courseName} id={item.id} content={item.content} />
          )
        })
      }

    </div>
  )
}

export default Pricing;