import React from "react";

import "./css/leftbar.css";
import { GoHome } from "react-icons/go";
import LanguageIcon from "@mui/icons-material/Language";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar-container">
        <div className="leftbar-option">
          <div className="leftbar-option">
            <div style={{ display: "flex", alignItems: "center" }}>
              <GoHome style={{ fontSize: "25px", marginRight: "15px" }} />
              <a>Home</a>
            </div>
          </div>
          <div className="leftbar-option">
            <div style={{ display: "flex", alignItems: "center" }}>
              <LanguageIcon style={{ marginRight: "15px" }} />
              <a>Public</a>
              <div style={{ marginLeft: "10px" }}>
                <KeyboardArrowUpRoundedIcon />
              </div>
            </div>
            <div className="link">
              <div className="tags">
                <p
                  style={{
                    borderRight: "3px solid rgba(245,162,9)",
                    color: "rgba(245,162,9)",
                    width: "120px",
                  }}
                >
                  Questions
                </p>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="leftbar-option">
            <div style={{ display: "flex", alignItems: "center" }}>
              <GroupsOutlinedIcon style={{ marginRight: "15px" }} />
              <a>Collectives</a>
            </div>
          </div>
          <div className="leftbar-option">
            <div style={{ display: "flex", alignItems: "center" }}>
              <BusinessCenterOutlinedIcon style={{ marginRight: "15px" }} />
              <a>Jobs</a>
            </div>
          </div>
        </div>
        <div className="login-register">
          <div className="login">Login</div>
          <div className="register">Register</div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
