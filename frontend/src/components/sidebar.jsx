import React, { useState } from "react";

function Sidebar({ orbit, sun, handleOrbitChange, handleSunChange }) {
  return (
    <div className="sidebar">
      <h2>Orbit Settings</h2>

      <div className="control">
        <label htmlFor="radius">Orbital Radius (AU)</label>
        <input
          type="range"
          id="radius"
          min="10"
          max="200"
          value={orbit.radius}
          name="radius"
          onChange={handleOrbitChange}
        />
        <input
          type="number"
          value={orbit.radius}
          name="radius"
          onChange={handleOrbitChange}
        />
      </div>

      <div className="control">
        <label htmlFor="speed">Orbital Speed (1000km/s)</label>
        <input
          type="range"
          id="speed"
          min="100"
          max="5000"
          value={orbit.orbitSpeed}
          name="orbitSpeed"
          onChange={handleOrbitChange}
        />
        <input
          type="number"
          value={orbit.orbitSpeed}
          name="orbitSpeed"
          onChange={handleOrbitChange}
        />
      </div>

      <div className="control">
        <label htmlFor="tilt">Axial tilt (degrees)</label>
        <input
          type="range"
          id="tilt"
          min="1"
          max="100"
          value={orbit.axialTilt}
          name="axialTilt"
          onChange={handleOrbitChange}
        />
        <input
          type="number"
          value={orbit.axialTilt}
          name="axialTilt"
          onChange={handleOrbitChange}
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
          value={sun.radius}
          name="radius"
          onChange={handleSunChange}
        />
        <input
          type="number"
          value={sun.radius}
          name="radius"
          onChange={handleSunChange}
        />
      </div>

      <div className="control">
        <label htmlFor="mass">Mass (M☉)</label>
        <input
          type="range"
          id="mass"
          min="50"
          max="500"
          value={sun.mass}
          name="mass"
          onChange={handleSunChange}
        />
        <input
          type="number"
          value={sun.mass}
          name="mass"
          onChange={handleSunChange}
        />
      </div>

      <div className="control">
        <label htmlFor="temp">Temperature (Celsius)</label>
        <input
          type="range"
          id="temp"
          min="1"
          max="10000"
          value={sun.temperature}
          name="temperature"
          onChange={handleSunChange}
        />
        <input
          type="number"
          value={sun.temperature}
          name="temperature"
          onChange={handleSunChange}
        />
      </div>

      <div className="control">
        <label htmlFor="luminosity">Luminosity (L☉)</label>
        <input
          type="range"
          id="luminosity"
          min="1"
          max="100"
          value={sun.luminosity}
          name="luminosity"
          onChange={handleSunChange}
        />
        <input
          type="number"
          value={sun.luminosity}
          name="luminosity"
          onChange={handleSunChange}
        />
      </div>
    </div>
  );
}

export default Sidebar;
