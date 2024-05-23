import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Typing_text = () => {
    // const wordsArray = useTypewriter({
    //     words: ['Welcome to TechFacilitators.', 'Need a Physical Or Remote Developer?', 'Need to upgrade your current Stack?', 'Need a Team?'],
    //     loop: {},
    //     typeSpeed: 120,
    // });
  return (
    <div className='typing_text'>
        <p className="updatedTexts">
            {/* <span>{wordsArray[0]}</span>
            <span ><Cursor/></span> */}
        </p>
    </div>
  )
}

export default Typing_text