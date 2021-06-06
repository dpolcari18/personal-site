import React from 'react'

const Icon = ({ icon, alt, title, fill }) => {
    return (
        <div className='icon'>
            <img src={icon} alt={alt} title={title} style={{fill: `${fill}`}}/>
        </div>
    )
}

export default Icon