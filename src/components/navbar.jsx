import React from "react";
import {Link} from 'react-router-dom'

import search from "../../images/search-solid.svg";
import './Navbar.css'
import bars from "../../images/bars-solid.svg";
import logo from '../../images/logo.png'







const Navbar = () => {
  // Uppercase "Navbar"
  return (
    <nav>
      <div className="navbar">
        <button to="/" className="nav-logo-hem">
          <img src={bars} alt="logo" style={{ width: 15 }} />
        </button>
        <div className="nav-section">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <form action="">
            <input type="text" placeholder="Search " name="Search..." />
            <img src={search} alt="search" className="search-icon" width='18' />
          </form>

          <Link to="/" className="nav-item btn">
            About
          </Link>
          <Link to="/" className="nav-item btn">
            Products
          </Link>
          <Link to="/" className="nav-item btn">
            For Teams
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
