import React from 'react'
import './header.css'
import handleWhatsApp from "../Utility/WhatsAppUtils.jsx";

function Header() {




  

  return (
    <p className="header-title">
      {" "}
      Get Personalized medal hanger at 25% OFF + Free Gift{" "}
      <strong onClick={handleWhatsApp} style={{ color: "red", marginLeft:'5px' , cursor: 'pointer'}}>
        Shop Now
      </strong>
    </p>
  );
  }

export default Header