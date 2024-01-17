import { useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div>
          <LeftSidebar/>
          <RightSidebar/>
        </div>
      </Router>
    </div>
  );
}

export default App;
