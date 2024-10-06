// src/OrbitingBallModal.jsx
import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitingBall } from "./ball";
import { TextureLoader } from "three";

import { OrbitControls } from "@react-three/drei";

const OrbitingBallModal = ({ radius, size, speed, setModalOpen, waterCoverage, setWaterCoverage, temperature, setTemperature,
  atmosphere, setAtmosphere }) => {
  // const [waterCoverage, setWaterCoverage] = useState(0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setModalOpen(false)}>
          Save
        </button>
        {/* Slider for Water Coverage */}
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="waterCoverage">
            Water Coverage: {waterCoverage}%
          </label>
          <select
            id="waterCoverage"
            value={waterCoverage}
            onChange={(e) => setWaterCoverage(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          >
            <option value={0}>0</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="waterCoverage">
            Water Coverage: {waterCoverage}%
          </label>
          <select
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          >
            <option value={0}>0</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="Atmosphere Thickness">
            Atmosphere Thickness: {waterCoverage}%
          </label>
          <select
            id="atmosphere"
            value={atmosphere}
            onChange={(e) => setAtmosphere(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          >
            <option value={0}>0</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </div>
        <Canvas style={{ height: "500px", width: "500px" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitingBall
            radius={radius}
            size={size}
            speed={speed}
            waterCoverage={waterCoverage}
          />
          <OrbitControls /> {/* Add OrbitControls here */}
        </Canvas>
      </div>
    </div>
  );
};

export default OrbitingBallModal;
