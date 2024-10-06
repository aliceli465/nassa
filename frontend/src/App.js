// src/App.js
import React, { useState } from "react";
import BallScene from "./components/ball";

function App() {
  const [size, setSize] = useState(1); // Size of the larger ball
  const [orbitingSize, setOrbitingSize] = useState(0.2); // Size of the smaller ball
  const [orbitRadius, setOrbitRadius] = useState(2); // Orbit radius
  const [orbitSpeed, setOrbitSpeed] = useState(0.5); // Speed of orbiting ball
  const [heat, setHeat] = useState(0); // Heat level for color change of the sun
  const [tilt, setTilt] = useState(0); // New tilt state

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

  const handleTiltChange = (event) => {
    setTilt(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Three.js Ball in React</h1>
      <BallScene
        size={size}
        orbitingSize={orbitingSize}
        orbitRadius={orbitRadius}
        orbitSpeed={orbitSpeed}
        heat={heat}
        tilt={tilt}
      />
      <div>
        <input
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          value={size}
          onChange={handleSizeChange}
        />
        <p>Size of the large ball: {size}</p>
      </div>
      <div>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.01"
          value={orbitingSize}
          onChange={handleOrbitingSizeChange}
        />
        <p>Size of the smaller ball: {orbitingSize}</p>
      </div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          step="0.1"
          value={orbitRadius}
          onChange={handleOrbitRadiusChange}
        />
        <p>Orbit Radius (Distance between balls): {orbitRadius}</p>
      </div>
      <div>
        <input
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          value={orbitSpeed}
          onChange={handleOrbitSpeedChange}
        />
        <p>Orbit Speed: {orbitSpeed}</p>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={heat}
          onChange={handleHeatChange}
        />
        <p>Heat (Color of the sun): {heat}</p>
      </div>
      <div>
        <label>Tilt: </label>
        <input
          type="range"
          min="0"
          max="1" // Adjust range as needed
          value={tilt}
          onChange={(e) => setTilt(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
