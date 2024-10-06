import * as THREE from "three";

export const interpolateColor = (value) => {
  // Ensure value is clamped between 0 and 1000
  const clampedValue = Math.max(0, Math.min(value, 1000));

  // Map the clamped value to a range from 0 to 1
  const normalizedValue = clampedValue / 1000; // Range from 0 to 1

  // Create colors for yellow and blue
  const yellow = new THREE.Color(0xffff00); // Yellow for low temperatures
  const blue = new THREE.Color(0x0000ff); // Blue for high temperatures

  // Interpolate between yellow and blue based on the normalized value
  return yellow.lerp(blue, normalizedValue);
};
