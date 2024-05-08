import React from 'react';
import Navbar from '../components/Navbar';
import Typing_text from '../components/Typing_text';
import Slider from '../components/Slider';
import image1 from '../images/mobile.png';
import image2 from '../images/Backend.svg';
import image3 from '../images/Product_Management.svg';


const Homepage = () => {
    const cardContent = [
        {
            name: "Front-end Web Development",
            content: "Learn Complete Front-end web development by the  best instructor along side with projects...",
            imageUrl: ""
        },
        {
            name: "Back-end Web Development",
            content: "Learn Complete Back-end Web Development by the  best instructor along side with projects...",
            imageUrl: image2
        },
        {
            name: "Full Stack Web Development",
            content: "Learn Full Stack Web Development by the  best instructor along side with projects...",
            imageUrl: image3
        },
        {
            name: "Mobile Development",
            content: "Learn Mobile Development by the  best instructor along side with projects...",
            imageUrl: image1
        },
    ]
    
  return (
    <div className='homePage'>
        <Navbar />
        <Typing_text />
        <Slider />
        <section className='homePage-cont'>
            <h1><span>Services</span></h1>
            <div className='homePage-cont_body'>
            <div className="gridCont">
                {
                    cardContent.map((item)=>{
                        return (
                        <div className="col-12-xs col-7-sm col-5-lg">
                            <div className="gridCont--card">
                                <img src={item.imageUrl} alt="" />
                                <h1>{item.name}</h1>
                                <p>{item.content}</p>
                            </div>
                        </div>
                        )

                        }
                    
                    )
                }
            </div>
            </div>
        </section>
    </div>
  )
}

export default Homepage;