import React, { useState, useEffect } from 'react'

// styling
import './Navbar.css'

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
                <nav role='navigation'>
                    <div id='menu-toggle'>
                        <input type='checkbox'></input>
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id='menu'>
                            <a href='#home-div'>Home</a>
                            <a href='#about-div'>About</a>
                            <a href='#skills-div'>Skills</a>
                            <a href='#portfolio-div'>Portfolio</a>
                            <a href='#blog-div'>Blog</a>
                            <a href='#contact-div'>Contact</a>
                        </ul>
                    </div>
                </nav>
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