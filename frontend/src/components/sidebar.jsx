import React from "react";

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
          <p className="label">Size of the large ball: {size}</p>
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
          <p className="label">Size of the smaller ball: {orbitingSize}</p>
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
            Orbit Radius (Distance between balls): {orbitRadius}
          </p>
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
          <p className="label">Orbit Speed: {orbitSpeed}</p>
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
          <p className="label">Heat (Color of the sun): {heat}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
