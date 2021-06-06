import React from 'react'

const Icon = ({ icon, alt }) => {
    return (
        <div class='icon'>
            <img src={icon} alt={alt}/>
        </div>
    )
}

export default Icon