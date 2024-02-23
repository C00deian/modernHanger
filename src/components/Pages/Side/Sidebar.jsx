// Sidebar.js
import React, { useState } from "react";
import './Sidebar.css'

const Sidebar = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggle = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="toggle-button" onClick={handleToggle}>
        ☰
      </div>
      <ul>
        <li>Home</li>
        <li>
          About
          <ul className="sub-menu">
            <li>Team</li>
            <li>History</li>
          </ul>
        </li>
        <li>
          Services
          <ul className="sub-menu">
            <li>Web Development</li>
            <li>Graphic Design</li>
          </ul>
        </li>
        {/* Add more menu items with sub-menus as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
