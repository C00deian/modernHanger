import React from 'react'
import './Whatsapp.css'
import WhatsApp from '../assets/whats.png'
import Facebook from '../assets/tinyfc.png'
import handleWhatsApp from '../Utility/WhatsAppUtils.jsx'
function Whatsap() {

 
  const handleFacbook = () => {


    // Create a link for sending a WhatsApp message.
    const facebookLink = `https://www.facebook.com/profile.php?id=61556338081504`;

    // Open the link in a new tab/window.
    window.open(facebookLink, "_blank");
  };



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

        <button className="facbook-btn">
          <img
            src={Facebook}
            alt=""
            title="facbook"
            className=""
            onClick={handleFacbook}
          />
        </button>
      </div>
    );
}

export default Whatsap;