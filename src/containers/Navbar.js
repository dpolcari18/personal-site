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
                    <a href='#greeting-div'
                       name='greeting-div'
                       >Home</a>
                    <a href='#about-div'
                       name='about-div'
                       >About</a>
                    <a href='#skills-div'
                       name='skills-div'
                       >Skills</a>
                    <a href='#portfolio-div'
                       name='portfolio-div'
                       >Portfolio</a>
                    <a href='#blog-div'
                       name='blog-div'
                       >Blog</a>
                    <a href='#contact-div'
                       name='contact-div'
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
                        <li><a href="#greeting-div">Home</a></li>
                        <li><a href="#about-div">About</a></li>
                        <li><a href="#skills-div">Skills</a></li>
                        <li><a href="#portfolio-div">Portfolio</a></li>
                        <li><a href="#blog-div">Blog</a></li>
                        <li><a href="#contact-div">Contact</a></li>
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