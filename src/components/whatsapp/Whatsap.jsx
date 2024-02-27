import React from 'react'
import './Whatsapp.css'
import WhatsApp from '../assets/whats.png'
function Whatsap() {
    return (
      <div>
     

        <button className="fixed-button"><img src={WhatsApp} alt="" className='whats-app-btn' /></button>
      </div>
    );
}

export default Whatsap