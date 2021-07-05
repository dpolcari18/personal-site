import React from 'react'

// styling
import './Greeting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Greeting = () => {

    const isMobile = () => {
        if (window.innerWidth >= 800) {
            return(
                <div className='page-view vertical' id='greetings'>
                    <h1 className='line-1 anim-typewriter'>Hi, I'm David!</h1>
                    <h1 className='line-1 anim-typewriter-two'>I'm a full-stack software engineer in Austin, TX.</h1>
                    <div className='divBox' id='more'>
                        <a href='#about-me'>
                            <div>LEARN MORE ABOUT WHAT I DO</div>
                            <div><FontAwesomeIcon icon={faChevronDown}/></div>
                        </a>
                    </div>
                </div>
            )
        } else {
            return(
                <div className='page-view vertical' id='greetings'>
                    <h2 className='line-1 anim-typewriter'>Hi, I'm David!</h2>
                    <h2 className='line-1 anim-typewriter-three'>I'm a full-stack</h2>
                    <h2 className='line-1 anim-typewriter-four'>software</h2>
                    <h2 className='line-1 anim-typewriter-five'>engineer in</h2>
                    <h2 className='line-1 anim-typewriter-six'>Austin, TX.</h2>
                    <div className='divBox' id='more'>
                        <a href='#about-me'>
                            <div>LEARN MORE ABOUT WHAT I DO</div>
                            <div><FontAwesomeIcon icon={faChevronDown}/></div>
                        </a>
                    </div>
                </div>
                
            )
        }

    }

    return(
        <>
            {isMobile()}
        </>
    )
}

export default Greeting