import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

import "./Navbar.css";
import logo from "../../assets/finalLogo.png";
const MyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
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
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/stander">BLOG</Link>
        </li>
        <li>
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
