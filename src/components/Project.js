import React from 'react'

const Project = ({ project }) => {
    return (
        <div className='project-card'>
            <div className='card-header'>
                <img src={project.image} alt={project.title} />
            </div>
            <div className='card-body'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className='technology-div'>
                    {project.technologies.map(tech => <span className='tag' key={tech} style={{background: `${project.background}`}}>{tech}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Project