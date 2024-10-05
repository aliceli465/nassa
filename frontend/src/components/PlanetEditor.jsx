// PlanetEditor.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import PlanetSidebar from "./planetSidebar"; // Adjust the path if needed
import Planet from "./Planet"; // Adjust the path if needed
import "../App.css";
import spaceImage from "../assets/space2.jpg";

const PlanetEditor = ({ planet, handleInputChange, closeEditor }) => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const spaceTexture = new  THREE.TextureLoader().load(spaceImage);
    scene.background = spaceTexture;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    //renderer.setSize(400, 400);
    renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5,);
    mountRef.current.appendChild(renderer.domElement);

    // Create a canvas element and set its style
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute'; // Use absolute positioning
    canvas.style.top = '200px'; // Adjust this value to move it lower
    canvas.style.left = '50%'; // Center horizontally
    canvas.style.transform = 'translateX(-75%)'; // Adjust for centering
    
    //Zooming and panning
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true; // Allow zooming
    controls.enablePan = true; // Allow panning 
    
    //Display planet
    const planet = Planet({ radius: 1 });
    scene.add(planet);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    //Clean up canvas and planet on unmount
    return () => {
        if (mountRef && mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
      };
    }, []); // Add planet as a dependency to update its properties

  // Update the planet properties when the state changes
  /*
  useEffect(() => {
    if (planetMeshRef.current) {
      planetMeshRef.current.scale.set(planet.radius, planet.radius, planet.radius);
      // Additional property updates can be made here if needed
    }
  }, [planet]);
  */

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{backgroundColor: 'transparent'}}>
        <button className="close-button" onClick={closeEditor} style={{ zIndex: 100 }} >
          Close
        </button>
        { /* <canvas id="bg" style={{ zIndex: 1000 }}></canvas> */ }
        <div ref={mountRef} />
        <PlanetSidebar 
          planet={planet}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PlanetEditor;
