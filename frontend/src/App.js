// src/App.js
import React, { useState } from "react";
import BallScene from "./components/ball";
import Sidebar from "./components/sidebar";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // You can omit the ".jsx" in most cases.
import OrbitingBallModal from "./components/justBall";
function App() {
  const [sunSize, setSunSize] = useState(1); // sunSize of the larger ball
  const [planetSize, setPlanetSize] = useState(0.2); // sunSize of the smaller ball
  const [orbitRadius, setOrbitRadius] = useState(2); // Orbit radius
  const [orbitSpeed, setOrbitSpeed] = useState(0.5); // Speed of orbiting ball
  const [heat, setHeat] = useState(0); // Heat level for color change of the sun
  const [modalOpen, setModalOpen] = useState(false);
  const [orbitingBall, setOrbitingBall] = useState({
    water: 0,
    atmosphere: 0,
    temperature: 0,
    windspeed: 0,
  });

  const [waterCoverage, setWaterCoverage] = useState(0);

  const handleOrbitingBall = (newProps) => {
    setOrbitingBall((prevProps) => ({
      ...prevProps,
      ...newProps,
    }));
  };

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

  const Home = () => (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
  const About = () => (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the about page!</p>
    </div>
  );
  const Sources = () => (
    <div>
      <h1>Sources Page</h1>
      <p>Welcome to the sources page!</p>
    </div>
  );
  const NotFoundPage = () => <h1>404 - Page Not Found</h1>;

  return (
    <>
        <Router>
          <Navbar>
            <div style={{ padding: "2rem" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sources" element={<Sources />} />
                <Route path="*" element={<NotFoundPage />} />{" "}
                {/* Catch-all route */}
              </Routes>
            </div>
          </Navbar>
        </Router>

      <div className="button-container">
        <button onClick={() => setModalOpen(true)}>Edit my planet</button>
        <br></br>
        <img src="./planet.gif" className="pwanet" />
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
            waterCoverage={waterCoverage}
          />
        </div>
      </div>
      {modalOpen && (
        <OrbitingBallModal
          radius={0}
          size={planetSize * 5}
          speed={0}
          setModalOpen={setModalOpen}
          waterCoverage={waterCoverage}
          setWaterCoverage={setWaterCoverage}
        />
      )}
    </>
  );
}

export default App;
