import React, { useState } from 'react'

// styling
import './Contact.css'

// ENV Vars
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

// endpoint
const SEND_EMAIL = 'https://api.emailjs.com/api/v1.0/email/send'

const Contact = () => {

    // local state 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')


    // send email: emailObj: {headers: {}, method: '', body: '{}'}
    const sendEmail = async (emailObj) => {
        
        try {
            // attempt to send email to email.js server
            const postReq = await fetch(SEND_EMAIL, emailObj)
            const postRes = await postReq
            
            // test response and throw different alert for user
            if (postRes.status === 200) {
                // reset form if successful
                setName('')
                setEmail('')
                setSubject('')
                setBody('')
                // alert message notifying user of success
                throw 'Thank you for reaching out. I will be in touch shortly!'
            } else {
                // alert message notifying user of error
                throw 'Something went wrong. Please try again.'     
            }
        } catch(e) {
            // catch success of error message and put on DOM
            let alertUser = document.getElementById('warning')
            alertUser.innerHTML = e
            setTimeout(() => alertUser.innerHTML='* All fields are required', 3000)
        }
    }

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

        let emailObj = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }
        
        sendEmail(emailObj)

    }

    return(
        <div className='page-view vertical' id='contact-me'>
            <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
            <h3 className='contact-title'>Want to Know More?</h3>
            <h3 className='contact-subtitle'>Send me an Email!</h3>
                <div className='input-container ic1'>
                    <input 
                           id='name-input'
                           placeholder='* Name' 
                           value={name} 
                           onChange={(e) => setName(e.target.value)} 
                           className='contact-input'
                           type='text'
                           required>                    
                    </input>
                </div>
                <div className='input-container ic2'>
                    <input 
                           id='email-input'
                           placeholder='* Email Address' 
                           value={email} 
                           onChange={(e) => setEmail(e.target.value)} 
                           className='contact-input'
                           type='email'
                           required>                    
                    </input>
                </div>
                <div className='input-container ic2'>
                    <input 
                           id='subject-input'
                           placeholder='* Subject' 
                           value={subject} 
                           onChange={(e) => setSubject(e.target.value)}
                           className='contact-input'
                           type='text'
                           required>                               
                    </input>
                </div>
                <div className='input-container ic3'>
                    <textarea 
                              id='body-input'
                              placeholder='* What would you like to say..?' 
                              value={body} 
                              onChange={(e) => setBody(e.target.value)}
                              className='contact-input'
                              type='text'
                              required>                                  
                    </textarea>
                </div>
                <div className='ic2' id='warning'>
                    * All fields are required
                </div>
                <button type='submit' className='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact