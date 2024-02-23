import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

import './navbar.css';

const MyNavbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav>
   
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaCartShopping style={{ fill: "white" }} />
        ) : (
          <FaCartShopping style={{ fill: "white" }} />
        )}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="Icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/create">
            <FontAwesomeIcon icon={faUserPlus} className="Icon" />
            Create
          </Link>
        </li>
        <li>
          <Link to="/list">
            <FontAwesomeIcon icon={faUsers} className="Icon" />
            User
          </Link>
        </li>
      </ul>
      <span className="icon">
        {" "}
        <FiSearch />
        <FaRegUser />
        <FaCartShopping />
      </span>
    </nav>
  );
};

export default MyNavbar;
