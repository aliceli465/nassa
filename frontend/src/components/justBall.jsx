// src/OrbitingBallModal.jsx
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitingBall, OrbitingBall2 } from "./ball";
import { TextureLoader } from "three";

import { OrbitControls } from "@react-three/drei";
const atmosphereLabels = {
  10: "Light",
  25: "Normal",
  40: "Thick",
  60: "Very Thick",
};
const magnetosphereLabels = {
  0: "None",
  10: "Weak",
  30: "Normal",
  40: "Strong",
};
const OrbitingBallModal = ({
  radius,
  size,
  speed,
  setModalOpen,
  waterCoverage,
  setWaterCoverage,
  temperature,
  setTemperature,
  atmosphere,
  setAtmosphere,
  no,
  setNo,
  oxygen,
  setOxygen,
  co2,
  setCo2,
  magnetosphere,
  setMagnetosphere,
  albedo,
  setAlbedo,
}) => {
  // const [waterCoverage, setWaterCoverage] = useState(0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setModalOpen(false)}>
          Save
        </button>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Canvas style={{ height: "500px", width: "500px" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitingBall2
              size={size}
              waterCoverage={waterCoverage}
              atmosphere={atmosphere}
              magnetosphere={magnetosphere}
            />
            <OrbitControls /> {/* Add OrbitControls here */}
          </Canvas>

          <div className="planetRemote">
            {/* Slider for Water Coverage */}
            <div style={{ margin: "1rem 0" }} className="slider-container">
              <label htmlFor="waterCoverage">
                Water Coverage: {waterCoverage}%
              </label>
              <select
                id="waterCoverage"
                value={waterCoverage}
                onChange={(e) => setWaterCoverage(Number(e.target.value))}
              >
                <option value={0}>0</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="temperature">Temperature: {temperature}°C</label>
              <input
                id="temperature"
                type="range"
                min={0}
                max={100}
                step={5}
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                style={{ width: "40%" }}
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="Atmosphere Thickness">
                Atmosphere Density: {atmosphereLabels[atmosphere] || "__"}
              </label>
              <select
                id="atmosphere"
                value={atmosphere}
                onChange={(e) => setAtmosphere(Number(e.target.value))}
              >
                <option value={0}>None</option>
                <option value={25}>Light</option>
                <option value={50}>Normal</option>
                <option value={75}>Thick</option>
                <option value={100}>Very Thick</option>
              </select>
            </div>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="no%">Nitrogen concentration: {no}%</label>
              <input
                id="no%"
                type="range"
                min={0}
                max={100}
                value={no}
                onChange={(e) => setNo(Number(e.target.value))}
                style={{ width: "40%" }}
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="oxygen">Oxygen %: {oxygen}%</label>
              <input
                id="oxygen"
                type="range"
                min={0}
                max={100}
                value={oxygen}
                onChange={(e) => setOxygen(Number(e.target.value))}
                style={{ width: "40%" }}
              />
              <div style={{ margin: "1rem 0" }}>
                <label htmlFor="co2">Carbon Dioxide %: {co2}%</label>
                <input
                  id="co2"
                  type="range"
                  min={0}
                  max={100}
                  value={co2}
                  onChange={(e) => setCo2(Number(e.target.value))}
                  style={{ width: "40%" }}
                />
              </div>
              <div style={{ margin: "1rem 0" }}>
                <label htmlFor="albedo">Albedo %: {albedo}%</label>
                <input
                  id="albedo"
                  type="range"
                  min={0}
                  max={100}
                  value={albedo}
                  onChange={(e) => setAlbedo(Number(e.target.value))}
                  style={{ width: "40%" }}
                />
              </div>
              <div style={{ margin: "1rem 0" }}>
                <label htmlFor="Magnetosphere">
                  Magnetosphere: {magnetosphereLabels[magnetosphere] || "__"}
                </label>
                <select
                  id="magnetosphere"
                  value={magnetosphere}
                  onChange={(e) => setMagnetosphere(Number(e.target.value))}
                >
                  <option value={0}>None</option>
                  <option value={10}>Weak</option>
                  <option value={30}>Normal</option>
                  <option value={40}>Strong</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitingBallModal;
