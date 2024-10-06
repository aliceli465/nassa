import * as THREE from "three";

export const interpolateColor = (value) => {
  // Ensure value is clamped between 0 and 1000
  const clampedValue = Math.max(0, Math.min(value, 1000));

  // Map the clamped value to a range from 0 to 1
  const normalizedValue = clampedValue / 1000; // Range from 0 to 1

  //(255, 0, 0) to (255, 255, 0)
  return new THREE.Color(1, normalizedValue * 3, 0);
};

export const interpolate2 = (value) => {
  // Ensure value is clamped between 0 and 1000
  const clampedValue = Math.max(0, Math.min(value, 1000));

  // Map the clamped value to a range from 0 to 1
  const normalizedValue = clampedValue / 1000; // Range from 0 to 1

  // Create colors for brown and light red
  const brown = new THREE.Color(0x8b4513); // Brown color
  const lightRed = new THREE.Color(0xffa07a); // Light red color

  // Interpolate between brown and light red based on the normalized value
  return brown.lerp(lightRed, normalizedValue);
};
