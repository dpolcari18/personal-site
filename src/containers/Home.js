import React from 'react'

// styling
import './Home.css'

// components
import Greeting from '../components/Greeting'
import About from '../components/About'
import Skills from './Skills'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div id='home-div'>
            <Greeting />
            <About />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home