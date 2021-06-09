import React, { useState } from 'react'

// styling
import './Contact.css'

const Contact = () => {

    // local state 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className='page-view vertical'>
            <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
            <h3 className='contact-title'>Want to Know More?</h3>
            <h3 className='contact-subtitle'>Send me an Email!</h3>
                <div className='input-container ic1'>
                    <input placeholder='Name' 
                           value={name} 
                           onChange={(e) => setName(e.target.value)} 
                           className='contact-input'
                           type='text'>                    
                    </input>
                </div>
                <div className='input-container ic2'>
                    <input placeholder='Email Address' 
                           value={email} 
                           onChange={(e) => setEmail(e.target.value)} 
                           className='contact-input'
                           type='text'>                    
                    </input>
                </div>
                <div className='input-container ic2'>
                    <input placeholder='Subject' 
                           value={subject} 
                           onChange={(e) => setSubject(e.target.value)}
                           className='contact-input'
                           type='text'>                               
                    </input>
                </div>
                <div className='input-container ic3'>
                    <textarea placeholder='What would you like to say..?' 
                              value={body} 
                              onChange={(e) => setBody(e.target.value)}
                              className='contact-input'
                              type='text'>                                  
                    </textarea>
                </div>
                <button type='text' className='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact