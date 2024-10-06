// src/App.js
import React, { useState } from "react";
import BallScene from "./components/ball";

function App() {
  const [size, setSize] = useState(1); // Size of the larger ball
  const [orbitingSize, setOrbitingSize] = useState(0.2); // Size of the smaller ball
  const [orbitRadius, setOrbitRadius] = useState(2); // Orbit radius

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleOrbitingSizeChange = (event) => {
    setOrbitingSize(event.target.value);
  };

  const handleOrbitRadiusChange = (event) => {
    setOrbitRadius(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Three.js Ball in React</h1>
      <BallScene
        size={size}
        orbitingSize={orbitingSize}
        orbitRadius={orbitRadius}
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
    </div>
  );
}

export default App;
