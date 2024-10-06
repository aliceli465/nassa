// src/App.js
import React, { useState, useEffect } from "react";
import BallScene from "./components/ball";
import Sidebar from "./components/sidebar";
import Result from "./components/Result";
import "./App.css";
import About from "./pages/about";
import Sources from "./pages/sources";
import NotFound from "./pages/notfound";
// import { ReactDOM } from "react-dom/client";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar"; // You can omit the ".jsx" in most cases.
import OrbitingBallModal from "./components/justBall";

function Index() {
  const Home = () => <h1>Home Page</h1>;
  const Sources = () => <h1>Sources & References</h1>;
  const NotFoundPage = () => <h1>404 - Page Not Found</h1>;
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div style={{ padding: "0.25rem" }}>
            <Routes>
              <Route exact path="/" element={<App />} />
              <Route path="/About" element={<About />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="*" element={<NotFound />} />
              {/* Catch-all route */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

function App() {
  const [sunSize, setSunSize] = useState(1); // sunSize of the larger ball
  const [planetSize, setPlanetSize] = useState(0.2); // sunSize of the smaller ball
  const [orbitRadius, setOrbitRadius] = useState(2); // Orbit radius
  const [orbitSpeed, setOrbitSpeed] = useState(0.5); // Speed of orbiting ball
  const [heat, setHeat] = useState(0); // Heat level for color change of the sun
  const [modalOpen, setModalOpen] = useState(false);
  const [transitImage, setTransitImage] = useState(null);

  const [waterCoverage, setWaterCoverage] = useState(0);
  const [atmosphere, setAtmosphere] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [co2, setCo2] = useState(0);
  const [no, setNo] = useState(0);
  const [albedo, setAlbedo] = useState(0);
  const [magnetosphere, setMagnetosphere] = useState(0);
  const [habitability] = useState(0);

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

  return (
    <>
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
          <div className="button-container">
            <button onClick={() => setModalOpen(true)}>Edit my planet</button>
            <br></br>
            <img src="./planet.gif" className="pwanet" />
          </div>
        </div>
        {/* <div style={{ marginLeft: "5%", width: "300px" }}>
          <Result habitability={habitability} />
        </div> */}
        <div style={{ flexGrow: 1 }}>
          <BallScene
            sunSize={sunSize}
            planetSize={planetSize}
            orbitRadius={orbitRadius}
            orbitSpeed={orbitSpeed}
            heat={heat}
            waterCoverage={waterCoverage}
            atmosphere={atmosphere}
            magnetosphere={magnetosphere}
            temperature={temperature}
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
          temperature={temperature}
          setTemperature={setTemperature}
          atmosphere={atmosphere}
          setAtmosphere={setAtmosphere}
          no={no}
          setNo={setNo}
          oxygen={oxygen}
          setOxygen={setOxygen}
          co2={co2}
          setCo2={setCo2}
          magnetosphere={magnetosphere}
          setMagnetosphere={setMagnetosphere}
          albedo={albedo}
          setAlbedo={setAlbedo}
        />
      )}
    </>
  );
}

export default Index;
