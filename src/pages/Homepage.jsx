import React from 'react';
import Navbar from '../components/Navbar';
import Typing_text from '../components/Typing_text';
import Slider from '../components/Slider';

const Homepage = () => {
    const cardContent = [
        {
            name: "Front-end Web Development"
        },
        {
            name: "Back-end Web Development"
        },
        {
            name: "Full Stack Web Development"
        },
    ]
    
  return (
    <div className='homePage'>
        <Navbar />
        <Typing_text />
        <Slider />
        <section className='homePage_body'>
            <div className="gridCont">
                {
                    cardContent.map((item)=>{
                        return (
                        <div className="gridCont--card">
                            <div className="left">
                                <h1>{item.name}</h1>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                        )

                        }
                    
                    )
                }
            </div>
        </section>
    </div>
  )
}

export default Homepage;