import React, { useState } from "react";

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
          <p className="label">
            Radius of the Star: {size}&nbsp;
            <object
              className="info"
              onMouseEnter={() => setInfo(true, 1)}
              onMouseLeave={() => setInfo(false, 0)}
            >
              ⓘ
            </object>{" "}
          </p>
          {isShown && showId == 1 && (
            <span className="infoBox">
              This defines the radius of the large star that our exoplanet is
              orbiting around. Given in R☉, solar radii
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
          <p className="label">
            Radius of the exoplanet: {orbitingSize}&nbsp;
            <object
              className="info"
              onMouseEnter={() => setInfo(true, 2)}
              onMouseLeave={() => setInfo(false, 0)}
            >
              ⓘ
            </object>{" "}
          </p>
          {isShown && showId == 2 && (
            <span className="infoBox">
              This defines the radius of the exoplanet that we are creating.
              Given in R⊕, earth radii
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
            Orbital Radius: {orbitRadius}&nbsp;
            <object
              className="info"
              onMouseEnter={() => setInfo(true, 3)}
              onMouseLeave={() => setInfo(false, 0)}
            >
              ⓘ
            </object>{" "}
          </p>
          {isShown && showId == 3 && (
            <span className="infoBox">
              This defines the distance between the orbital of the exoplanet and
              the orbital of the sun. Given in earth radii
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
          <p className="label">
            Orbital Speed: {orbitSpeed}&nbsp;
            <object
              className="info"
              onMouseEnter={() => setInfo(true, 4)}
              onMouseLeave={() => setInfo(false, 0)}
            >
              ⓘ
            </object>{" "}
          </p>
          {isShown && showId == 4 && (
            <span className="infoBox">
              This defines the rotational speed of the exoplanet around its sun,
              or the period of its orbit. Given in km/s
            </span>
          )}
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="1000"
            value={heat}
            onChange={handleHeatChange}
            className="input"
          />
          <p className="label">
            Sun Temperature : {heat}0°C&nbsp;
            <object
              className="info"
              onMouseEnter={() => setInfo(true, 5)}
              onMouseLeave={() => setInfo(false, 0)}
            >
              ⓘ
            </object>{" "}
          </p>
          {isShown && showId == 5 && (
            <span className="infoBox">
              The hotter the sun, the bluer! Given in Celsius
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
