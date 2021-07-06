import React from 'react'

// styling
import './Home.css'

// containers
import Skills from './Skills'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Navbar from './Navbar'

// components
import Greeting from '../components/Greeting'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div id='home'>
            <div id='mobile-background'></div>
            <Greeting />
            <Navbar />
            <About />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home