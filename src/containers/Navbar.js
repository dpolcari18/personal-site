import React from 'react'

// styling
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='topnav sticky'>
            <a href='#home-div'>Home</a>
            <a href='#about-div'>About</a>
            <a href='#skills-div'>Skills</a>
            <a href='#portfolio-div'>Portfolio</a>
            <a href='#blog-div'>Blog</a>
            <a href='#contact-div'>Contact</a>
        </div>
    )
}

export default Navbar