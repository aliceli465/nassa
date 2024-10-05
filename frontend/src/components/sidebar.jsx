import React, { useState } from "react";
import InfoButton from "./infobutton";

function Sidebar() {
  // State to manage size, distance, and speed
  const [radius, setRadius] = useState(50);
  const [orbitSpeed, setOrbitSpeed] = useState(100);
  const [axialTilt, setAxialTilt] = useState(10);

  const [sunRadius, setSunRadius] = useState(50);
  const [sunMass, setSunMass] = useState(100);
  const [sunTemperature, setSunTemperature] = useState(10);
  const [sunLuminosity, setSunLuminosity] = useState(10);

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="sidebar">
      <h2>Orbit Settings</h2>
      <div className="control">
        <label htmlFor="radius">Orbital Radius (AU) &nbsp;<InfoButton> test </InfoButton>&nbsp; </label>
        <input
          type="range"
          id="radius"
          min="10"
          max="200"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="speed">Orbital Speed (km/s)</label>
        <input
          type="range"
          id="speed"
          min="50"
          max="500"
          value={orbitSpeed}
          onChange={(e) => setOrbitSpeed(e.target.value)}
        />
        <input
          type="number"
          value={orbitSpeed}
          onChange={(e) => setOrbitSpeed(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="tilt">Axial tilt (degrees)</label>
        <input
          type="range"
          id="tilt"
          min="1"
          max="100"
          value={axialTilt}
          onChange={(e) => setAxialTilt(e.target.value)}
        />
        <input
          type="number"
          value={axialTilt}
          onChange={(e) => setAxialTilt(e.target.value)}
        />
      </div>

      <h2>Sun Settings</h2>
      <div className="control">
        <label htmlFor="sunRadius">Radius (R☉)</label>
        <input
          type="range"
          id="sunRadius"
          min="10"
          max="200"
          value={sunRadius}
          onChange={(e) => setSunRadius(e.target.value)}
        />
        <input
          type="number"
          value={sunRadius}
          onChange={(e) => setSunRadius(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="mass">Mass (M☉)</label>
        <input
          type="range"
          id="mass"
          min="50"
          max="500"
          value={sunMass}
          onChange={(e) => setSunMass(e.target.value)}
        />
        <input
          type="number"
          value={sunMass}
          onChange={(e) => setSunMass(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="temp">Temperature (Kelvin)</label>
        <input
          type="range"
          id="temp"
          min="1"
          max="100"
          value={sunTemperature}
          onChange={(e) => setSunTemperature(e.target.value)}
        />
        <input
          type="number"
          value={sunTemperature}
          onChange={(e) => setSunTemperature(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="luminosity">Luminosity (L☉)</label>
        <input
          type="range"
          id="luminosity"
          min="1"
          max="100"
          value={sunLuminosity}
          onChange={(e) => setSunLuminosity(e.target.value)}
        />
        <input
          type="number"
          value={sunLuminosity}
          onChange={(e) => setSunLuminosity(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Sidebar;
