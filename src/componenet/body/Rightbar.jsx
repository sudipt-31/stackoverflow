import React from "react";
import "./css/rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-conatianer">
        <div className="linked">
          <div style={{ fontSize: "20px" }}>Linked</div>
          <div className="linked-lists">
            <div className="linked-list">
              <div className="slno">2</div>
              <div className="desc">cant install tsconfig json in vscode</div>
            </div>
            <div className="linked-list">
              <div>
                <div className="slno">4</div>
              </div>
              <div className="desc">
                Error while creating Angular project " Cannot be loaded Because
                Running Scripts is disabled on this system
              </div>
            </div>
            <div className="linked-list">
              <div>
                <div className="slno">0</div>
              </div>
              <div className="desc">
                Installing the Vercel CU in Visual Studio Code
              </div>
            </div>
            <div className="linked-list">
              <div>
                <div
                  className="slno"
                  style={{
                    backgroundColor: "rgb(244 128 36 / 91%)",
                    color: "white",
                  }}
                >
                  2
                </div>
              </div>
              <div className="desc">
                How to execute a command after every build in Visual Studion
                2012?
              </div>
            </div>
            <div className="linked-list">
              <div>
                {" "}
                <div className="slno">0</div>
              </div>
              <div className="desc">
                Vscode cannot be loaded because running scripts is disabled on
                this system
              </div>
            </div>
          </div>
        </div>
        <div className="related">
          <div style={{ fontSize: "20px" }}>Related</div>
          <div className="related-lists">
            <div className="related-list">
              <div>
                <div
                  className="rel-slno"
                  style={{
                    backgroundColor: "rgb(244 128 36 / 91%)",
                    color: "white",
                  }}
                >
                  2114
                </div>
              </div>
              <div className="rel-desc">
                PowerShell says "execution of scripts is disabled on this
                system."
              </div>
            </div>
            <div className="related-list">
              <div>
                <div className="rel-slno">1054</div>
              </div>
              <div className="rel-desc">
                vertical rulerrs in Visual Studio Code
              </div>
            </div>
            <div className="related-list">
              <div>
                <div className="rel-slno">990</div>
              </div>
              <div className="rel-desc">
                How do you format code in Visual Studio Code (VsCode)?
              </div>
            </div>
            <div className="related-list">
              <div>
                <div
                  className="rel-slno"
                  style={{
                    backgroundColor: "rgb(244 128 36 / 91%)",
                    color: "white",
                  }}
                >
                  740
                </div>
              </div>
              <div className="rel-desc">
                Multiline editing in Visual Studio Code
              </div>
            </div>
            <div className="related-list">
              <div>
                <div
                  className="rel-slno"
                  style={{
                    backgroundColor: "rgb(244 128 36 / 91%)",
                    color: "white",
                  }}
                >
                  985
                </div>
              </div>
              <div className="rel-desc">
                How do i hide certain files from the sidebar in Visual Studio
                Code?
              </div>
            </div>
            <div className="related-list">
              <div>
                <div className="rel-slno">764</div>
              </div>
              <div className="rel-desc">
                How do i hide certain files from the sidebar in visual studio
                code?
              </div>
            </div>
            <div className="related-list">
              <div>
                <div
                  className="rel-slno"
                  style={{
                    backgroundColor: "rgb(244 128 36 / 91%)",
                    color: "white",
                  }}
                >
                  933
                </div>
              </div>
              <div className="rel-desc">
                How do i duplicate a line or selection within Visual Studio
                code?
              </div>
            </div>
            <div className="related-list">
              <div>
                <div className="rel-slno">193</div>
              </div>
              <div className="rel-desc">
                psl cannot be loaded because running scripts is disbled on this
                system
              </div>
            </div>
            <div className="related-list">
              <div>
                <div className="rel-slno">775</div>
              </div>
              <div className="rel-desc">
                What is a Work Space in Visual Studio Code ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
