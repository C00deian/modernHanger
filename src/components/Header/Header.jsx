import React, { useState } from 'react';
import './header.css';
import handleWhatsApp from '../whatsapp/WhatsAppUtils';

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <p
      className="header-title"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`marquee ${isHovered ? 'paused' : ''}`}>
        Get Personalized Medal Hanger at 25% OFF on your First Order
        <strong onClick={handleWhatsApp} style={{ color: "red", marginLeft: '5px', cursor: 'pointer' }}>
          Shop Now
        </strong>
      </span>
    </p>
  );
}

export default Header;
