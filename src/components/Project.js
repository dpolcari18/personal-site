import React from 'react'

const Project = ({ project }) => {
    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <ul>
                {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
        </div>
    )
}

export default Project