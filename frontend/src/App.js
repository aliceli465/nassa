// src/App.js
import React, { useState } from "react";
import BallScene from "./components/ball";
import Sidebar from "./components/sidebar";
import "./App.css";
function App() {
  const [size, setSize] = useState(1); // Size of the larger ball
  const [orbitingSize, setOrbitingSize] = useState(0.2); // Size of the smaller ball
  const [orbitRadius, setOrbitRadius] = useState(2); // Orbit radius
  const [orbitSpeed, setOrbitSpeed] = useState(0.5); // Speed of orbiting ball
  const [heat, setHeat] = useState(0); // Heat level for color change of the sun

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleOrbitingSizeChange = (event) => {
    setOrbitingSize(event.target.value);
  };

  const handleOrbitRadiusChange = (event) => {
    setOrbitRadius(event.target.value);
  };

  const handleOrbitSpeedChange = (event) => {
    setOrbitSpeed(event.target.value);
  };

  const handleHeatChange = (event) => {
    setHeat(event.target.value);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>No Diddy</h1>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ flex: 1, padding: "20px" }}>
          <Sidebar
            handleSizeChange={handleSizeChange}
            handleOrbitingSizeChange={handleOrbitingSizeChange}
            handleOrbitRadiusChange={handleOrbitRadiusChange}
            handleOrbitSpeedChange={handleOrbitSpeedChange}
            handleHeatChange={handleHeatChange}
            size={size}
            orbitingSize={orbitingSize}
            orbitRadius={orbitRadius}
            orbitSpeed={orbitSpeed}
            heat={heat}
          />
        </div>
        <div style={{ flex: 2 }}>
          <BallScene
            size={size}
            orbitingSize={orbitingSize}
            orbitRadius={orbitRadius}
            orbitSpeed={orbitSpeed}
            heat={heat}
          />
        </div>
      </div>
    </>
  );
}

export default App;
