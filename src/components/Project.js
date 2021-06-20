import React from 'react'

const Project = ({ project }) => {
    return (
        <a href={project.url ? project.url : null} target='_blank' rel='noreferrer' style={{textDecoration: 'none', color: '#000'}}>
            <div className='project-card'>
                <div className='card-header'>
                    <img src={project.image} alt={project.title} />
                </div>
                <div className='card-body'>
                    <div>
                        <h2>{project.title}</h2>
                    </div>
                    <div>
                        <p>{project.description}</p>
                    </div>
                    <div className='technology-div'>
                        {project.technologies.map(tech => <span className='tag' key={tech} style={{background: `${project.background}`}}>{tech}</span>)}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Project