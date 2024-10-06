import React, { useState } from "react";

function Sidebar({ orbit, sun, handleOrbitChange, handleSunChange }) {
  const [isShown, setIsShown] = useState(false);
  const [showId, setId] = useState(0);

  function setInfo(state, id) {
    setIsShown(state);
    setId(id);
  }

function Sidebar({
  handleSizeChange,
  handleOrbitingSizeChange,
  handleOrbitRadiusChange,
  handleOrbitSpeedChange,
  handleHeatChange,
  size,
  orbitingSize,
  orbitRadius,
  orbitSpeed,
  heat,
}) {
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
        <label htmlFor="radius">Orbital Radius (AU)&nbsp; 
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
        <label htmlFor="speed">Orbital Speed (1000km/s)&nbsp; 
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
          min="10"
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
        <label htmlFor="temp">Temperature (Celsius)&nbsp; 
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
      <h2 className="title">Control Panel</h2>
      <div className="slider-container">
        <div className="slider">
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={size}
            onChange={handleSizeChange}
            className="input"
          />
          <p className="label">Size of the large ball: {size}&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 1)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </p>
          {isShown && showId == 1 && (
            <span className = "infoBox">
              Filler.
            </span>
          )}
        </div>
        <div className="slider">
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.01"
            value={orbitingSize}
            onChange={handleOrbitingSizeChange}
            className="input"
          />
          <p className="label">Size of the smaller ball: {orbitingSize}&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 2)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </p>
          {isShown && showId == 2 && (
            <span className = "infoBox">
              Filler.
            </span>
          )}
        </div>
        <div className="slider">
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={orbitRadius}
            onChange={handleOrbitRadiusChange}
            className="input"
          />
          <p className="label">
            Orbit Radius (Distance between balls): {orbitRadius}&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 3)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </p>
          {isShown && showId == 3 && (
            <span className = "infoBox">
              Filler.
            </span>
          )}
        </div>
        <div className="slider">
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={orbitSpeed}
            onChange={handleOrbitSpeedChange}
            className="input"
          />
          <p className="label">Orbit Speed: {orbitSpeed}&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 4)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </p>
          {isShown && showId == 4 && (
            <span className = "infoBox">
              Filler.
            </span>
          )}
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={heat}
            onChange={handleHeatChange}
            className="input"
          />
          <p className="label">Luminence (Color of the sun): {heat}&nbsp; 
          <object className = "info"
          onMouseEnter={() => setInfo(true, 5)}
          onMouseLeave={() => setInfo(false, 0)}>
          ⓘ 
          </object> </p>
          {isShown && showId == 5 && (
            <span className = "infoBox">
              Filler.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;