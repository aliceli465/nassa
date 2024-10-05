import React, { useState } from "react";

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
  const [showId, setId] = useState(0);

  function setInfo(state, id) {
    setIsShown(state);
    setId(id);
  }

  return (
    <div className="sidebar">
      <h2>Orbit Settings</h2>
      <div className="control">
        <label htmlFor="radius">Orbital Radius (AU) &nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 1)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </label>
          {isShown && showId == 1 && (
            <span className = "infoBox">
              The distance the planet is from its sun. On average the Earth is 1 AU (Astronomical Unit) away from our Sun!
            </span>
          )}
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
        <label htmlFor="speed">Orbital Speed (km/s) &nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 2)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </label>
          {isShown && showId == 2 && (
            <span className = "infoBox">
              The distance the planet is from its sun. On average the Earth is 1 AU (Astronomical Unit) away from our Sun!
            </span>
          )}
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
        <label htmlFor="tilt">Axial tilt (degrees)&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 3)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </label>
          {isShown && showId == 3 && (
            <span className = "infoBox">
              The distance the planet is from its sun. On average the Earth is 1 AU (Astronomical Unit) away from our Sun!
            </span>
          )}
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
        <label htmlFor="sunRadius">Radius (R☉)&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 4)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </label>
          {isShown && showId == 4 && (
            <span className = "infoBox">
              The distance the planet is from its sun. On average the Earth is 1 AU (Astronomical Unit) away from our Sun!
            </span>
          )}
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
        <label htmlFor="mass">Mass (M☉)&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 5)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </label>
          {isShown && showId == 5 && (
            <span className = "infoBox">
              The distance the planet is from its sun. On average the Earth is 1 AU (Astronomical Unit) away from our Sun!
            </span>
          )}
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
        <label htmlFor="temp">Temperature (Kelvin)&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 6)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </label>
          {isShown && showId == 6 && (
            <span className = "infoBox">
              The distance the planet is from its sun. On average the Earth is 1 AU (Astronomical Unit) away from our Sun!
            </span>
          )}
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
        <label htmlFor="luminosity">Luminosity (L☉)&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 7)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </label>
          {isShown && showId == 7 && (
            <span className = "infoBox">
              The distance the planet is from its sun. On average the Earth is 1 AU (Astronomical Unit) away from our Sun!
            </span>
          )}
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
