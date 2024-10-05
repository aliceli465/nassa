// Sun.jsx
import React from "react";
import * as THREE from "three";
import sunImage from "../assets/sun.jpg"; // Adjust the import path if necessary
import normalImage from "../assets/normal.jpg";

const Sun = () => {
  const sunTexture = new THREE.TextureLoader().load(sunImage);
  const normalTexture = new THREE.TextureLoader().load(normalImage);
  const sunMaterial = new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: normalTexture,
    emissive: 0xffff00, // Glow
    emissiveIntensity: 1, // Glow intensity
  });

  return new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32), sunMaterial);
};

export default Sun;
