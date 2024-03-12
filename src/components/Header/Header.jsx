import React from 'react'
import './header.css'
import handleWhatsApp from "../Utility/WhatsAppUtils.jsx";

function Header() {

  return (
    <p className="header-title">
      {" "}
      <marquee >Get Personalized Medal Hanger at 25% OFF on your First Order
      <strong onClick={handleWhatsApp} style={{ color: "red", marginLeft:'5px' , cursor: 'pointer'}}>
        Shop Now
        </strong>
      </marquee> 
    </p>
  );
  }

export default Header