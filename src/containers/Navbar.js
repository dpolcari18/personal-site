import React from 'react'

// styling
import './Navbar.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    // check window width => render top nav if >= 800 px and hamburger menu if < 800 px
    const isMobile = () => {
        if (window.innerWidth >= 800) {
            return(
                <div className='topnav sticky'>
                    <a href='#greetings'
                       name='greetings'
                       >Home</a>
                    <a href='#about-me'
                       name='about-me'
                       >About</a>
                    <a href='#my-skills'
                       name='my-skills'
                       >Skills</a>
                    <a href='#portfolio-projects'
                       name='portfolio-projects'
                       >Portfolio</a>
                    <a href='#blog-posts'
                       name='blog-posts'
                       >Blog</a>
                    <a href='#contact-me'
                       name='contact-me'
                       >Contact</a>
                </div>
            )
        } else {
            return (
                <header className='sticky'>
                    <a href="#main-menu"
                        id="main-menu-toggle"
                        class="menu-toggle"
                        aria-label="Open main menu">
                        <FontAwesomeIcon icon={faBars} />
                        <span class="sr-only">Open main menu</span>
                    </a>
                    
                    
                    <nav id="main-menu" class="main-menu" aria-label="Main menu">
                        <a href="#main-menu-toggle"
                        id="main-menu-close"
                        class="menu-close"
                        aria-label="Close main menu">
                        <span class="sr-only">Close main menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                        </a>
                        <ul>
                        <li><a href="#greetings">Home</a></li>
                        <li><a href="#about-me">About</a></li>
                        <li><a href="#my-skills">Skills</a></li>
                        <li><a href="#portfolio-projects">Portfolio</a></li>
                        <li><a href="#blog-posts">Blog</a></li>
                        <li><a href="#contact-me">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="#main-menu-toggle"
                        class="backdrop"
                        tabindex="-1"
                        aria-hidden="true" hidden></a>
                </header>
            )
        }
    }

    return (
        <>
            {isMobile()}
        </>
    )
}

export default Navbar