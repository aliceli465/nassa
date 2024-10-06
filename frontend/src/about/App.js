// src/App.js
import React, { useState } from "react";
import BallScene from "./components/ball";
import Sidebar from "./components/sidebar";
import "./App.css";
// import { ReactDOM } from "react-dom/client";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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

  const Home = () => <h1>Home Page</h1>;
  const About = () => <h1>About Page</h1>;
  const NotFoundPage = () => <h1>404 - Page Not Found</h1>;

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar>
            <div style={{ padding: "2rem" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/sources" element={<Sources />} />
                <Route path="*" element={<NotFoundPage />} />{" "}
                {/* Catch-all route */}
              </Routes>
            </div>
          </Navbar>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
