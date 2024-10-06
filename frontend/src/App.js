// src/App.js
import React, { useState } from "react";
import BallScene from "./components/ball";
import Sidebar from "./components/sidebar";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // You can omit the ".jsx" in most cases.

function App() {
  const [sunSize, setSunSize] = useState(1); // sunSize of the larger ball
  const [planetSize, setPlanetSize] = useState(0.2); // sunSize of the smaller ball
  const [orbitRadius, setOrbitRadius] = useState(2); // Orbit radius
  const [orbitSpeed, setOrbitSpeed] = useState(0.5); // Speed of orbiting ball
  const [heat, setHeat] = useState(0); // Heat level for color change of the sun

  const handleSunSizeChange = (event) => {
    setSunSize(event.target.value);
  };

  const handlePlanetSizeChange = (event) => {
    setPlanetSize(event.target.value);
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

  const Home = () => <h1>Home Page</h1>;
  const About = () => <h1>About Page</h1>;
  const Sources = () => <h1>Sources & References</h1>;
  const NotFoundPage = () => <h1>404 - Page Not Found</h1>;

  return (
    <>
    <div>
      <Router>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="*" element={<NotFoundPage />} />  {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
    </div>
      <div style={{ textAlign: "center" }}>
        <h1>No Diddy</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "5%", width: "300px" }}>
          <Sidebar
            handleSizeChange={handleSunSizeChange}
            handleOrbitingSizeChange={handlePlanetSizeChange}
            handleOrbitRadiusChange={handleOrbitRadiusChange}
            handleOrbitSpeedChange={handleOrbitSpeedChange}
            handleHeatChange={handleHeatChange}
            size={sunSize}
            orbitingSize={planetSize}
            orbitRadius={orbitRadius}
            orbitSpeed={orbitSpeed}
            heat={heat}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <BallScene
            sunSize={sunSize}
            planetSize={planetSize}
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
