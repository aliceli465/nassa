import React, { useEffect, useRef, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sunImage from "./assets/sun.jpg";
import planetImage from "./assets/planet.jpg";
import normalImage from "./assets/normal.jpg";
import spaceImage from "./assets/space2.jpg";

import Sidebar from "./components/sidebar";
import PlanetSidebar from "./components/planetSidebar";

function App() {
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
  const mountRef = useRef(null);
  const angle = useRef(0); // Use a ref to keep track of the angle for the planet's orbit

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanet({
      ...planet,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!mountRef.current) return; // Ensure the ref is defined

    const currentMount = mountRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = null;
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

    //Panning
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.panSpeed = 1;
    controls.screenSpacePanning = false;

    // Light source
    const pointLight = new THREE.PointLight(0xffffff, 1000);
    pointLight.position.set(20, 20, 20);
    //const ambientLight = new THREE.AmbientLight(0xffffff, 0);
    scene.add(pointLight);
    //scene.add(pointLight, ambientLight);

    //const gridHelper = new THREE.GridHelper();
    //scene.add(gridHelper);

    //Sun
    // Replace the moon code with the sun code
    const sunTexture = new THREE.TextureLoader().load(sunImage);
    const normalTexture = new THREE.TextureLoader().load(normalImage);
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
      normalMap: normalTexture, //S
      emissive: 0xffff00, // Glow
      emissiveIntensity: 1, //Glow intensity
    });

    // Create the sun mesh
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(5, 32, 32), // Increase the size for a more sun-like appearance
      sunMaterial
    );
    scene.add(sun);

    // Add a point light for glowing effect
    const sunLight = new THREE.PointLight(0xffff00, 2, 100); // Yellow light, intensity 2
    sunLight.position.set(0, 0, 0); // Position it at the center of the sun
    scene.add(sunLight);

    /*
    // Add stars
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(200).fill().forEach(addStar);
    */

    // Planet
    const planetTexture = new THREE.TextureLoader().load(planetImage);
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      planetMaterial
    ); // Size of the planet
    scene.add(planet);

    // Define the semi-major and semi-minor axes for the orbit
    const semiMajorAxis = 15; // Changeable radius in the x direction
    const semiMinorAxis = 10; // Changeable radius in the y direction

    // Create the orbit path as an ellipse centered on the sun
    const ellipsePoints = [];
    const numPoints = 100; // Number of points for the ellipse
    for (let i = 0; i <= numPoints; i++) {
      const theta = (i / numPoints) * Math.PI * 2; // Angle for each point
      const x = semiMajorAxis * Math.cos(theta);
      const y = semiMinorAxis * Math.sin(theta);
      ellipsePoints.push(new THREE.Vector3(x, y, 0)); // Z remains constant
    }

    const ellipseGeometry = new THREE.BufferGeometry().setFromPoints(
      ellipsePoints
    );
    const ellipseMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2,
    });
    const ellipsePath = new THREE.LineLoop(ellipseGeometry, ellipseMaterial); // Create a loop for the ellipse
    scene.add(ellipsePath); // Add the orbit path to the scene

    // Position the camera
    camera.position.setZ(30);

    // Set scene background
    //const spaceTexture = new THREE.TextureLoader().load(spaceImage);
    //scene.background = spaceTexture;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      angle.current += 0.01;

      // Calculate the new position of the planet based on the elliptical orbit
      const x = semiMajorAxis * Math.cos(angle.current);
      const y = semiMinorAxis * Math.sin(angle.current);
      planet.position.set(x, y, 0);
      sun.rotation.y += 0.01;

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

  return (
    <div className="App">
      <div className="container">
        <canvas id="bg"></canvas>
        <div ref={mountRef} style={{ height: "100vh" }}></div>
        <Sidebar />
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
