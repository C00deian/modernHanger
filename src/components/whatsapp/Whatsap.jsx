import React from 'react'
import './Whatsapp.css'
import WhatsApp from '../assets/whats.png'

import handleWhatsApp from '../Utility/WhatsAppUtils.jsx'

function Whatsap() {

    return (
      <div className="Contact-btn">
        <button className="fixed-button">
          <img
            src={WhatsApp}
            alt=""
            className="whats-app-btn"
            title="Contact"
            onClick={handleWhatsApp}
          />
        </button>

     
      </div>
    );
}

export default Whatsap;