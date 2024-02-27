import React from 'react'
import './Whatsapp.css'
import WhatsApp from '../assets/whats.png'
function Whatsap() {

  const HandleForm = () => {
      // Replace 'YOUR_PHONE_NUMBER' with your actual phone number.
    const phoneNumber = '919315337736';

    // Create a link for sending a WhatsApp message.
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open the link in a new tab/window.
    window.open(whatsappLink, '_blank');
  

  }

    return (
      <div>
     
        

        <button className="fixed-button"><img src={WhatsApp} alt="" className='whats-app-btn' title='Contact' onClick={HandleForm}/></button>
      </div>
    );
}

export default Whatsap