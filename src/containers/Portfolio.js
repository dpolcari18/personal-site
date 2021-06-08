import React from 'react'

// components
import Project from '../components/Project'

// styling
import './Portfolio.css'

// images
import weDriveImg from '../images/weDrive.png'
import stonkMarketImg from '../images/stonkMarket.png'
import flyByImg from '../images/flyBy.png'
import literalLibraryImg from '../images/literalLibrary.png'

const Portfolio = () => {

    const projects = {
        weDrive: {
            title: 'weDrive',
            description: 'weDrive is a journey management application that aims to reduce the risks associated with driving. It provides the user with directions, traffic conditions, weather conditions and a vehicle inspection checklist prior to starting a trip so they can make informed decisions about their safety.',
            image: weDriveImg,
            technologies: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL', 'JSON Web Tokens', 'BCrypt', 'React Bootstrap'],
            background: '#9ccf00'
        },
        theStonkMarket: {
            title: 'The Stonk Market',
            description: 'The Stonk Market is a lightweight platform where users can buy/sell "stocks" and follow companies. Real time stock prices are presented using FinnHub.io\'s api.',
            image: stonkMarketImg,
            technologies: ['JavaScript', 'Ruby on Rails', 'SQLite', 'Bootstrap'],
            background: '#038be3'
        },
        flyBy : {
            title: 'Fly-By',
            description: 'Fly-By is a platform that connects airlines to customers. Customers can search, buy, change and cancel flights while airline employees can create and cancel flights.',
            image: flyByImg,
            technologies: ['Ruby on Rails', 'SQLite', 'Semantic UI'],
            background: '#e47b82'
        },
        literalLibrary: {
            title: 'Literal Library',
            description: 'Literal Library is a simple Ruby CLI application that allows you to login as a student or librarian. Students can search and checkout books, while librarians can add and remove books from the shelves.',
            image: literalLibraryImg,
            technologies: ['Ruby', 'SQLite'],
            background: '#262c36'
        }
    }

    return(
        <div className='container'>
            <Project project={projects.weDrive} />
            <Project project={projects.theStonkMarket} />
            <Project project={projects.flyBy} />
            <Project project={projects.literalLibrary} />
        </div>
    )
}

export default Portfolio