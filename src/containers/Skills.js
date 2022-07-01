import React from 'react'

// icons
import { ReactComponent as Ruby } from '../icons/ruby.svg'
import { ReactComponent as RubyOnRails } from '../icons/rubyonrails.svg'
import { ReactComponent as JavaScript } from '../icons/javascript.svg'
import { ReactComponent as ReactIcon } from '../icons/react.svg'
import { ReactComponent as Redux } from '../icons/redux.svg'
import { ReactComponent as DataDog } from '../icons/datadog.svg'
import { ReactComponent as Heroku } from '../icons/heroku.svg'
import { ReactComponent as Netlify } from '../icons/netlify.svg'
import { ReactComponent as MySql } from '../icons/mysql.svg'
import { ReactComponent as Sqlite } from '../icons/sqlite.svg'
import { ReactComponent as Postgresql } from '../icons/postgresql.svg'
import { ReactComponent as CircleCI } from '../icons/circleci.svg'

// styling
import './Skills.css'

const Skills = () => {
    return(
        <div className='grid-container vertical' id='my-skills'>
            <JavaScript className='icon' alt={'javascript logo'} title={'JavaScript'} fill={'#F7DF1E'} />
            <ReactIcon className='icon' alt={'react logo'} title={'React'} fill={'#61DAFB'} />
            <Ruby className='icon' alt={'ruby logo'} title={'Ruby'} fill={'#CC342D'}/>
            <RubyOnRails className='icon' alt={'rails logo'} title={'Rails'} fill={'#CC0000'} />
            <MySql className='icon' alt={'mysql logo'} title={'MySQL'} />
            <Redux className='icon' alt={'redux logo'} title={'Redux'} fill={'#764ABC'} />
            <DataDog className='icon' alt={'datadog logo'} title={'DataDog'} />
            <CircleCI className='icon' alt={'circleci logo'} title={'CircleCI'} />
            <Heroku className='icon' alt={'heroku logo'} title={'Heroku'} fill={'#430098'} />
            <Netlify className='icon' alt={'netlify logo'} title={'Netlify'} fill={'#00C7B7'} />
            <Sqlite className='icon' alt={'sqlite logo'} title={'SQLite'} fill={'#003B57'} />
            <Postgresql className='icon' alt={'postgresql logo'} title={'PostgreSQL'} fill={'#4169E1'} />
        </div>
    )
}

export default Skills