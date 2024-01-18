import React from "react";
import "./css/middle.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { PiShareFatLight } from "react-icons/pi";

function middle(props) {
  console.log(props.result);
  return (
    <div className="middle">
      <div className="middle-container">
        <div className="middle-container-top">
          <div style={{ padding: "15px" }}>
            <div className="middle-top">
              <h4>{props.result.title}</h4>
              <div
                className="buttons"
                style={{ backgroundColor: "rgb(244 128 36 / 91%)" }}
              >
                <div className="btn">
                  <RemoveRoundedIcon
                    style={{ textAlign: "center", margin: "0px" }}
                  />
                </div>
                <div
                  className="btn"
                  style={{ fontSize: "15px", padding: "3px" }}
                >
                  103
                </div>
                <div
                  className="btn"
                  style={{ borderRight: "0px", margin: "0px" }}
                >
                  <AddRoundedIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="hr"></div>
          <div className="detials">
            <div className="owner-detial">
              <div
                className="detial"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={props.result.owner.profile_image} className="prfl" />
                <div className="detial" style={{ marginLeft: "10px" }}>
                  {props.result.owner.display_name}
                </div>
              </div>
              <div
                className="detial"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  width: "70px",
                  textAlign: "center",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {props.result.owner.reputation}
              </div>
            </div>
            <div className="date-detial">
              <div className="yr-mnth">Asked 2 years,1 month ago</div>
              <div className="day">Active 21 Days ago</div>
              <div className="viwed">
                viewed {props.result.view_count} times
              </div>
            </div>
          </div>
        </div>
        <div className="middle-conatiner-buttom">
          <div className="container-buttom">
            <div className="question">
              Inside of visual studio code ,i'm trying to execute a script.bat
              from the command line ,but i'm getting the following error.
            </div>
            <div
              className="question"
              style={{ backgroundColor: "rgba(0,0,0,0.045)", padding: "15px" }}
            >
              File C:\Theses_Repo\train-cnn\environment\scripts\activate.psl
              cannotloaded because running scripts is disabled on this system
            </div>
            <div className="question">
              Afeter reading{" "}
              <span style={{}}>
                <a
                  href="#"
                  style={{
                    color: "rgb(244 128 36 / 91%)",
                    textDecoration: "underline",
                  }}
                >
                  this
                </a>
              </span>{" "}
              i tried to run the viual studio code in administrator mode
              ,thinking that the problem was a matter of privilages.But the
              error is throwing anyway.
            </div>
          </div>
          <div className="container-buttom-icon">
            <div className="icn-left">
              <BookmarkIcon style={{ color: "rgb(244 128 36 / 91%)" }} />
            </div>
            <div className="icn-right">
              <PiShareFatLight
                style={{ fontSize: "25px", marginRight: "10px" }}
              />
              <CommentOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="answer">
        <div className="answer-main-container">
          <div className="answer-main-container-top">
            <div style={{ fontSize: "15px", letterSpacing: "1px" }}>
              20 Answers
            </div>
            <div className="filter">
              <div className="option">
                {" "}
                <a href="#">Votes</a>
              </div>
              <div className="option">
                <a href="#">Oldest</a>
              </div>
              <div className="option">
                <a href="#">Active</a>
              </div>
            </div>
          </div>
          <div className="answers-container">
            <div className="answers-top">
              <div className="auth-dt">
                <div className="author">
                  <span style={{ marginRight: "3px" }}>Author :</span>
                  <span style={{ color: "rgb(244 128 36 / 91%)" }}>
                    javaed(308)
                  </span>
                </div>
                <div className="ans-dt">
                  <span style={{ marginRight: "3px" }}>Answered :</span>{" "}
                  <span>Dec 9'19 at 8:20</span>
                </div>
              </div>
              <div
                className="buttons"
                style={{
                  backgroundColor: "rgb(244 128 36 / 91%)",
                  marginRight: "0px",
                }}
              >
                <div className="btn">
                  <RemoveRoundedIcon
                    style={{ textAlign: "center", margin: "0px" }}
                  />
                </div>
                <div
                  className="btn"
                  style={{ fontSize: "15px", padding: "3px" }}
                >
                  103
                </div>
                <div
                  className="btn"
                  style={{ borderRight: "0px", margin: "0px" }}
                >
                  <AddRoundedIcon />
                </div>
              </div>
            </div>
            <div className="all-ans">
              <div className="ans">
                For more simplicity,I want to add the vs code setting path in
                adddition to Ricardo,s answer,you can get like this:{" "}
              </div>
              <div className="ans">
                File {"->"} Preferences {"->"} Settting and in the search bar
                write "automation".{" "}
              </div>
              <div className="ans">
                After that, by looking your operating system enter "edit in
                settings.json".
              </div>
              <div className="ans">
                Finally,add the following b/n the braces:
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default middle;
