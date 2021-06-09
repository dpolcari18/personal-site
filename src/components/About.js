import React from 'react'

// headshot
import headshot from '../images/david-headshot.png'

// icons
import github from '../icons/github.png'
import linkedin from '../icons/linkedin.png'
import medium from '../icons/medium.png'

// styling 
import './About.css'

const About = () => {
    return(
        <div className='page-view horizontal'>
            <div>
                <h3>David Polcari</h3>
                <p>I'm a full-stack software engineer in Austin, TX with a background in oil & gas and real estate lending. Self proclaimed efficiency enthusiast who enjoys optimizing everything I touch. Entrepreneur who enjoys working in a fast paced environment that promotes continuous improvement and non-stop learning. In my free time you can find me watching sports, playing video games, mountain biking or growing ridiculously hot peppers.</p>
                <div id='links'>
                    <a href='https://github.com/dpolcari18' target='_blank' rel='noreferrer'><img src={github} className='icon-links'/></a>
                    <a href='https://www.linkedin.com/in/david-polcari/' target='_blank' rel='noreferrer'><img src={linkedin} className='icon-links'/></a>
                    <a href='https://davidpolcari.medium.com/' target='_blank' rel='noreferrer'><img src={medium} className='icon-links'/></a>
                </div>
            </div>
            <div>
                <img src={headshot} alt='Professional headshot of David Polcari by Twinty Photography' id='headshot'/>
            </div>
        </div>
    )
}

export default About