import React, { useState } from "react";

import "./css/nav.css";
import logo from "../Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

function navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-lefft">
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="header-middle">
            <div className="header-search-container">
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-container">
              <div>About</div>
              <div>Product</div>
              <div>For teams</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default navbar;
