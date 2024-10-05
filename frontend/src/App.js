import React, { useEffect, useRef, useState } from "react";

import "./App.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Sun from "./components/Sun";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";

import Sidebar from "./components/sidebar";
import PlanetSidebar from "./components/planetSidebar";
import PlanetEditor from "./components/PlanetEditor";

function App() {
  let angleChange = 0.01;
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
  const prevOrbitSpeed = useRef(orbit.orbitSpeed);

  useEffect(() => {
    // Update the ref with the current count after each render
    prevOrbitSpeed.current = orbit.orbitSpeed;
  });

  const [sun, setSun] = useState({
    radius: 0,
    mass: 0,
    temperature: 0,
    luminosity: 0,
  });

  const mountRef = useRef(null);
  const angle = useRef(0); // Use a ref to keep track of the angle for the planet's orbit

  useEffect(() => {
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

    //Panning and scrolling
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.panSpeed = 1;
    controls.screenSpacePanning = false;

    // Light source
    const pointLight = new THREE.PointLight(0xffffff, 1000);
    pointLight.position.set(20, 20, 20);
    scene.add(pointLight);

    const sun = Sun();
    const planet = Planet({ radius: 1 });
    const orbit_ = Orbit({
      semiMajorAxis: 15,
      semiMinorAxis: 10,
    });

    // Add a point light for glowing effect
    const sunLight = new THREE.PointLight(0xffff00, 2, 100); // Yellow light, intensity 2
    sunLight.position.set(0, 0, 0); // Position it at the center of the sun
    scene.add(sunLight);

    scene.add(sun);
    scene.add(planet);
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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanet({
      ...planet,
      [name]: value,
    });
  };

  const updateSpeed = (newSpeed) => {
    let change = newSpeed - orbit.orbitSpeed;
    if (change !== 0) {
      angleChange += change * 0.001;
    }
  };

  const handleOrbitChange = (e) => {
    const { name, value } = e.target;
    setOrbit({
      ...orbit,
      [name]: value,
    });
    updateSpeed(value);
  };

  useEffect(() => {});
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
        <PlanetEditor
          planet={planet}
          handleInputChange={handleInputChange}
          closeEditor={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
