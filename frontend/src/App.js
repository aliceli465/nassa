import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="button-container">
          <button>Edit my planet</button>
          <br></br>
          <img src="./planet.gif" className="pwanet" />
        </div>
      </div>
    </div>
  );
}

export default App;
