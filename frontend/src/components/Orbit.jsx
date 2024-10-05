// Orbit.jsx
import React from "react";
import * as THREE from "three";

const Orbit = ({ semiMajorAxis, semiMinorAxis }) => {
  const ellipsePoints = [];
  const numPoints = 10000; // Number of points for the ellipse
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
  return new THREE.LineLoop(ellipseGeometry, ellipseMaterial);
};

export default Orbit;
