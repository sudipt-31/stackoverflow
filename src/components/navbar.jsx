import React from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import './Navbar.css'




const Navbar = () => {
  // Uppercase "Navbar"
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "100px", marginRight: "10px" }}
          />
        </Link>
        <form action="">
          <input type="text" placeholder="Search " name="search" />
          <img src={search} alt=""  className="search-icon"/>
        </form>

        <Link to="/" className="nav-item">
          About
        </Link>
        <Link to="/" className="nav-item">
          Product
        </Link>
        <Link to="/" className="nav-item">
          For Teams
        </Link>

     
      </div>
    </nav>
  );
};

export default Navbar;
