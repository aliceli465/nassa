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
  const [totalHabitabilityScore, setTotalHabitabilityScore] = useState(0);

  //habitability function
  const getHabitability = ({
    waterCoverage,
    atmosphere,
    temperature,
    magnetosphere,
    orbitRadius,
  }) => {
    var L = waterCoverage / 100;
    var S = 1;
    var E = 1;
    var C = 2;
    var tot = 10;

    S += magnetosphere / 100;
    S += atmosphere / 100;

    if (orbitRadius >= 2.5 && orbitRadius <= 5) E += 2;

    if (orbitRadius >= 5 && orbitRadius <= 10) E += 1;

    if (temperature >= 200000 && temperature <= 400000) E += 1;

    return (((S + E + C + L) ** 0.25 / 10 ** 0.25) * 100).toFixed(2);
  };

  const calculateHabitabilityScore = () => {
    // Simple logic for demonstration; replace with your actual logic
    const score = getHabitability({
      waterCoverage,
      atmosphere,
      temperature,
      magnetosphere,
      orbitRadius,
    });
    setTotalHabitabilityScore(score);
  };

  useEffect(() => {
    calculateHabitabilityScore();
  }, [waterCoverage, atmosphere, temperature, magnetosphere, orbitRadius]);

  const Header = ({ habitabilityScore }) => {
    return (
      <header>
        {/* Habitability Score Container */}
        <div
          style={{
            position: "absolute",
            top: "60px", // Adjust based on your nav height
            right: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background
            color: "#fff",
            padding: "15px 20px", // More padding for a nicer look
            borderRadius: "10px", // More rounded corners
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", // Deeper shadow for depth
            backdropFilter: "blur(5px)", // Blur effect for the background
            border: "2px solid rgba(255, 255, 255, 0.2)", // Subtle white border
            textAlign: "center", // Center the text
          }}
        >
          <h3 style={{ margin: "0", fontSize: "1rem" }}>
            Total Habitability Score:
          </h3>
          <h2 style={{ margin: "5px 0 0", fontSize: "1rem" }}>
            {habitabilityScore}%
          </h2>
        </div>
      </header>
    );
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
      <Header habitabilityScore={totalHabitabilityScore} />
    </>
  );
}

export default Index;
