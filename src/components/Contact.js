import React, { useState } from 'react'

// styling
import './Contact.css'

// // environment vars
// require('dotenv').config()

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const Contact = () => {

    // local state 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let data = {
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: USER_ID,
            template_params: {
                name: name,
                email: email,
                subject: subject,
                body: body 
            }
        }
        debugger
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
                <button type='submit' className='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact