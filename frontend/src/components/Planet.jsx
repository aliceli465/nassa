// Planet.jsx
import React from "react";
import * as THREE from "three";
import planetImage from "../assets/planet.jpg"; // Adjust the import path if necessary

const Planet = ({ radius }) => {
  const planetTexture = new THREE.TextureLoader().load(planetImage);
  const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });

  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, 32, 32),
    planetMaterial
  );
};

export default Planet;
