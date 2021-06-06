import React from 'react'

// headshot
import headshot from '../images/david-headshot.png'

// styling 
import './About.css'

const About = () => {
    return(
        <div className='page-view horizontal'>
            <div>
                <h3>David Polcari</h3>
                <p>I'm a full-stack software engineer in Austin, TX with a background in oil & gas and real estate lending. Self proclaimed efficiency enthusiast who enjoys optimizing everything I touch. Entrepreneur who enjoys working in a fast paced environment that promotes continuous improvement and non-stop learning. In my free time you can find me watching sports, playing video games, mountain biking or growing ridiculously hot peppers.</p>
            </div>
            <div>
                <img src={headshot} alt='Professional headshot of David Polcari by Twinty Photography'/>
            </div>
        </div>
    )
}

export default About