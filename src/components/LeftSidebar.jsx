import React from 'react'
import "./LeftSidebar.css";


const LeftSidebar = () => {
  return (
    <>
    <div className="left-sidebar">
      <nav className="side-nav">
        <button className="nav-btn">
          <p>Home</p>
        </button>
        <div className="side-nav-div">
          <button className="nav-btn">
            <p>Public</p>
          </button>
          <button className="nav-btn li">
            <img alt="" />
            <p style={{alignItems:"end"}}> Questions </p>
          </button>
          <button className="nav-btn">
            <p>Tags</p>
          </button>
          <button className="nav-btn">
            <p>Users</p>
          </button>
        </div>
      </nav>
    </div>
    </>
  );
}

export default LeftSidebar
