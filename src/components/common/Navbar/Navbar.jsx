import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

import "./Navbar.css";
import logo from "../../assets/finalLogo.png";
const MyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (


      <nav className={isHomePage ? '' : 'black-navbar'}>
        <Link className="navbar-brand text-light" to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <RxCross2 style={{ fill: "white" }} className="menuIcon" />
          ) : (
            <RxHamburgerMenu style={{ fill: "white" }} className="menuIcon" />
          )}
        </div>
      <ul className={menuOpen ? "open" : ""} >
          <li >
            <Link to="/" >HOME</Link>
          </li>

          <div className="dropdown">
            <li>
              <Link to="/">SHOP</Link>
            </li>
            <div class="dropdown-content">
              <Link to="/Personalized">Personalized Medal Hanger</Link>
              <Link to="/Sports">Sports Medal Hanger</Link>
            </div>
          </div>


          <li >
            <Link to="/story">STORY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <span className="icon">
          {" "}
          <FiSearch />
          <FaRegUser />
        </span>
      </nav>
   

  );
};

export default MyNavbar;
