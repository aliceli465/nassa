import * as THREE from "three";

export const interpolateColor = (value) => {
  // Pastel yellow to red
  const pastelYellow = new THREE.Color(0xf7f702); // Light pastel yellow
  const red = new THREE.Color(0xff0000); // Red

  return pastelYellow.lerp(red, value);
};
