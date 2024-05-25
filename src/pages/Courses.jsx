import React from 'react';
import Card from '../components/Card';
import { allCourses } from '../utilities/AllCourses';


const Pricing = () => {
  return (
    <div className='courses'>
      {
        allCourses.map((item)=>{
          return(
            <Card summary={item.cardComponent?.summary} courseName={item.courseName} id={item.id} content={item.cardComponent?.content} />
          )
        })
      }

    </div>
  )
}

export default Pricing;