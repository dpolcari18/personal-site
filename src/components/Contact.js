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


    // send email
    const sendEmail = async (emailObj) => {
        const postReq = await fetch(SEND_EMAIL, emailObj)
        const postRes = await postReq

        console.log(postRes)

        if (postRes.status === 200) {
            console.log("SUCCESS")
        } else if (postRes.status.includes(400)) {
            console.log("FAILED")            
        }
    }

    const validateInputs = () => {
        let inputs = [name, email, subject, body]
        // if any are '' return error msg all fields are required
        
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()

        validateInputs()
        
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

        setName('')
        setEmail('')
        setSubject('')
        setBody('')
    }

    return(
        <div className='page-view vertical' id='contact-div'>
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
                           type='text'
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
                <div className='ic2'>
                    * All fields are required
                </div>
                <button type='submit' className='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact