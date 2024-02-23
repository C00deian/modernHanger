import React from 'react'
import './NewsLetter.css'

function NewLetter() {
  return (
      <div className='News-section'>
          
          <h1 className='news-heading'>Join Our NewsLetter</h1>
<p className='news-title'> Connet With Sales Experts</p>

          <div className='Connect-section'><input type="email" placeholder='Your E-mail' className='email-input' />
          <button className='connect-btn'> Connect</button>
          </div>
    </div>
  )
}

export default NewLetter