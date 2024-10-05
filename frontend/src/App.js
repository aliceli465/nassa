import React, { useEffect, useRef, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sunImage from "./assets/sun.jpg";
import planetImage from "./assets/planet.jpg";
import normalImage from "./assets/normal.jpg";
import spaceImage from "./assets/space2.jpg";
import Sun from "./components/Sun";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";

import Sidebar from "./components/sidebar";
import PlanetSidebar from "./components/planetSidebar";

function App() {
  const angleChange = 0.01;
  const [modalOpen, setModalOpen] = useState(false);
  const [planet, setPlanet] = useState({
    radius: 0,
    mass: 0,
    pressure: 0,
    water: 0,
    co2: 0,
    o2: 0,
    n2: 0,
  });

  const [orbit, setOrbit] = useState({
    radius: 1,
    orbitSpeed: 10,
    axialTilt: 0,
  });

  const [sun, setSun] = useState({
    radius: 0,
    mass: 0,
    temperature: 0,
    luminosity: 0,
  });

  const mountRef = useRef(null);
  const angle = useRef(0); // Use a ref to keep track of the angle for the planet's orbit

  const currentMount = mountRef.current;
  if (!currentMount) return;

  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  scene.background = null; //make background transparent
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  currentMount.appendChild(renderer.domElement);
  camera.position.setZ(30);

  //Panning
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = true;
  controls.panSpeed = 1;
  controls.screenSpacePanning = false;

  // Light source
  const pointLight = new THREE.PointLight(0xffffff, 1000);
  pointLight.position.set(20, 20, 20);
  scene.add(pointLight);

  const sun_ = Sun();
  const planet_ = Planet({ radius: 1 });
  const orbit_ = Orbit({
    semiMajorAxis: 15,
    semiMinorAxis: 10,
  });

  // Add a point light for glowing effect
  const sunLight = new THREE.PointLight(0xffff00, 2, 100); // Yellow light, intensity 2
  sunLight.position.set(0, 0, 0); // Position it at the center of the sun
  scene.add(sunLight);

  scene.add(sun_);
  scene.add(planet_);
  scene.add(orbit_);

  // Position the camera
  camera.position.setZ(30);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    angle.current += angleChange;

    // Calculate the new position of the planet based on the elliptical orbit
    const x = 15 * Math.cos(angle.current);
    const y = 10 * Math.sin(angle.current);
    planet.position.set(x, y, 0);
    //controls.update();
    renderer.render(scene, camera);
  }

  animate(); // Call the animate function to start rendering

  // Clean up on unmount
  return () => {
    if (currentMount) {
      currentMount.removeChild(renderer.domElement);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanet({
      ...planet,
      [name]: value,
    });
  };

  const handleOrbitChange = (e) => {
    const { name, value } = e.target;
    const change = 0;
    if (name == "orbitSpeed") {
      change = orbit.orbitSpeed - value;
    }
    setOrbit({
      ...orbit,
      [name]: value,
    });

    if (change != 0) {
      angleChange += 0.1;
      animate();
    }
  };

  const handleSunChange = (e) => {
    const { name, value } = e.target;
    setSun({
      ...sun,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <div className="container">
        <canvas id="bg"></canvas>
        <div ref={mountRef} style={{ height: "100vh" }}></div>
        <Sidebar
          orbit={orbit}
          sun={sun}
          handleOrbitChange={handleOrbitChange}
          handleSunChange={handleSunChange}
        />
        <div className="button-container">
          <button onClick={() => setModalOpen(true)}>Edit my planet</button>
          <br></br>
          <img src="./planet.gif" className="pwanet" />
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
            <PlanetSidebar
              planet={planet}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
