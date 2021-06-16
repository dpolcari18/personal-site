import React, { useState, useEffect } from 'react'

// styling
import './Navbar.css'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    //local state
    // const [active, setActive] = useState('greeting-div')

    // observe elements
    // const observeEle = ['greeting-div', 'about-div', 'skills-div', 'portfolio-div', 'blog-div', 'contact-div']

    // sets active link when listener triggers
    // const handleObserve = (ele) => {        
    //     setActive(ele[0].target.id)
    // }

    // listens for scroll event to set active link
    // useEffect (() => {
    //     const options = {
    //         root: null,
    //         threshold: [0.5]
    //     }

    //     const observer = new IntersectionObserver((ele) => handleObserve(ele), options)

    //     observeEle.forEach(element => observer.observe(document.getElementById(`${element}`)))

    //     return (() => {
    //         observeEle.forEach(element => observer.unobserve(document.getElementById(`${element}`)))
    //     })
    // }, [])
    
    // check window width => render top nav if >= 800 px and hamburger menu if < 800 px
    const isMobile = () => {
        if (window.innerWidth >= 800) {
            return(
                <div className='topnav sticky'>
                    <a href='#greeting-div'
                       name='greeting-div'
                    //    className={active === 'greeting-div' ? 'active' : null}
                       >Home</a>
                    <a href='#about-div'
                       name='about-div'
                    //    className={active === 'about-div' ? 'active' : null}
                       >About</a>
                    <a href='#skills-div'
                       name='skills-div'
                    //    className={active === 'skills-div' ? 'active' : null}
                       >Skills</a>
                    <a href='#portfolio-div'
                       name='portfolio-div'
                    //    className={active === 'portfolio-div' ? 'active' : null}
                       >Portfolio</a>
                    <a href='#blog-div'
                       name='blog-div'
                    //    className={active === 'blog-div' ? 'active' : null}
                       >Blog</a>
                    <a href='#contact-div'
                       name='contact-div'
                    //    className={active === 'contact-div' ? 'active' : null}
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
                        {/* <span class="fa fa-bars" aria-hidden="true"></span> */}
                    </a>
                    
                    {/* <h1 class="logo">hamburgers</h1> */}
                    
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