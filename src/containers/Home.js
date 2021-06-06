import React from 'react'

// components
import Greeting from '../components/Greeting'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div>
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