import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import PlanetSidebar from "./components/planetSidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [planet, setPlanet] = useState({
    radius: 0,
    mass: 0,
    pressure: 0,
    water: 0,
    co2: 0,
    o2: 0,
    n2: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanet({
      ...planet,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="button-container">
          <button onClick={() => setModalOpen(true)}>Edit my planet</button>
          <br></br>
          <img src="./planet.gif" className="pwanet" />
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
            <PlanetSidebar
              planet={planet}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
