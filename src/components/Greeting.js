import React from 'react'

// styling
import './Greeting.css'

const Greeting = () => {
    return(
        <div className='page-view vertical' id='greeting-div'>
            <h1 className='line-1 anim-typewriter'>Hi, I'm David!</h1>
            <h1 className='line-1 anim-typewriter-two'>I'm a full-stack software engineer in Austin, TX.</h1>
        </div>
    )
}

export default Greeting