import React from "react";
import { useEffect, useState } from "react";

import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Middle from "./middle";
import "./css/index.css";

function index() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="body-index">
      <div className="body-index-content">
        <Leftbar />
        {data.items && data.items.length > 0 ? (
          <Middle result={data.items[0]} />
        ) : (
          <div
            style={{ width: "50vw", marginTop: "20vh", marginRight: "40vw" }}
          >
            Loading ...
          </div>
        )}
        <Rightbar />
      </div>
    </div>
  );
}

export default index;
