import React from 'react'

// components
import Icon from '../components/Icon'

// icons
import ruby from '../icons/ruby.svg'
import rubyOnRails from '../icons/rubyonrails.svg'
import javaScript from '../icons/javascript.svg'
import html from '../icons/html5.svg'
import css from '../icons/css3.svg'
import react from '../icons/react.svg'
import redux from '../icons/redux.svg'
import powerBI from '../icons/powerbi.svg'
import heroku from '../icons/heroku.svg'
import netlify from '../icons/netlify.svg'
import sqlite from '../icons/sqlite.svg'
import postgresql from '../icons/postgresql.svg'

// styling
import './Skills.css'

const Skills = () => {
    return(
        <div className='grid-container vertical'>
            <Icon icon={ruby} alt={'ruby logo'}/>
            <Icon icon={rubyOnRails} alt={'rails logo'} />
            <Icon icon={javaScript} alt={'javascript logo'} />
            <Icon icon={html} alt={'html5 logo'} />
            <Icon icon={css} alt={'css3 logo'} />
            <Icon icon={react} alt={'react logo'} />
            <Icon icon={redux} alt={'redux logo'} />
            <Icon icon={powerBI} alt={'powerbi logo'} />
            <Icon icon={heroku} alt={'heroku logo'} />
            <Icon icon={netlify} alt={'netlify logo'} />
            <Icon icon={sqlite} alt={'sqlite logo'} />
            <Icon icon={postgresql} alt={'postgresql logo'} />
        </div>
    )
}

export default Skills