import React from 'react'

// icons
import { ReactComponent as Ruby } from '../icons/ruby.svg'
import { ReactComponent as RubyOnRails } from '../icons/rubyonrails.svg'
import { ReactComponent as JavaScript } from '../icons/javascript.svg'
import { ReactComponent as Html } from '../icons/html5.svg'
import { ReactComponent as Css } from '../icons/css3.svg'
import { ReactComponent as ReactIcon } from '../icons/react.svg'
import { ReactComponent as Redux } from '../icons/redux.svg'
import { ReactComponent as PowerBI } from '../icons/powerbi.svg'
import { ReactComponent as Heroku } from '../icons/heroku.svg'
import { ReactComponent as Netlify } from '../icons/netlify.svg'
import { ReactComponent as Sqlite } from '../icons/sqlite.svg'
import { ReactComponent as Postgresql } from '../icons/postgresql.svg'

// styling
import './Skills.css'

const Skills = () => {
    return(
        <div className='grid-container vertical' id='skills-div'>
            <JavaScript className='icon' alt={'javascript logo'} title={'JavaScript'} fill={'#F7DF1E'} />
            <Ruby className='icon' alt={'ruby logo'} title={'Ruby'} fill={'#CC342D'}/>
            <Html className='icon' alt={'html5 logo'} title={'HTML'} fill={'#E34F26'} />
            <Css className='icon' alt={'css3 logo'} title={'CSS'} fill={'#1572B6'} />
            <RubyOnRails className='icon' alt={'rails logo'} title={'Rails'} fill={'#CC0000'} />
            <ReactIcon className='icon' alt={'react logo'} title={'React'} fill={'#61DAFB'} />
            <Redux className='icon' alt={'redux logo'} title={'Redux'} fill={'#764ABC'} />
            <PowerBI className='icon' alt={'powerbi logo'} title={'PowerBI'} fill={'#F2C811'} />
            <Heroku className='icon' alt={'heroku logo'} title={'Heroku'} fill={'#430098'} />
            <Netlify className='icon' alt={'netlify logo'} title={'Netlify'} fill={'#00C7B7'} />
            <Sqlite className='icon' alt={'sqlite logo'} title={'SQLite'} fill={'#003B57'} />
            <Postgresql className='icon' alt={'postgresql logo'} title={'PostgreSQL'} fill={'#4169E1'} />
        </div>
    )
}

export default Skills