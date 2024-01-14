import { useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <Navbar />
        {/* <AllRoutes/> */}
     
      </Router>
    </div>
  );
}

export default App;
