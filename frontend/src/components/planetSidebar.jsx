import React from "react";

function PlanetSidebar({ planet, handleInputChange }) {
  return (
    <div className="sidebar2">
      <h2>Planet Settings</h2>

      <div className="control2">
        <label htmlFor="radius">Radius (km)</label>
        <input
          type="range"
          id="radius"
          min="10"
          max="200"
          name="radius"
          value={planet.radius}
          onChange={handleInputChange}
        />
        <input
          name="radius"
          type="number"
          value={planet.radius}
          onChange={handleInputChange}
        />
      </div>

      <div className="control2">
        <label htmlFor="mass">Mass (kg)</label>
        <input
          type="range"
          id="mass"
          min="50"
          max="500"
          name="mass"
          value={planet.mass}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="mass"
          value={planet.mass}
          onChange={handleInputChange}
        />
      </div>

      <div className="control2">
        <label htmlFor="pressure">Pressure (atm)</label>
        <input
          type="range"
          id="pressure"
          min="1"
          max="100"
          name="pressure"
          value={planet.pressure}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="pressure"
          value={planet.pressure}
          onChange={handleInputChange}
        />
      </div>

      <div className="control2">
        <label htmlFor="water">Water (%)</label>
        <input
          type="range"
          id="water"
          min="10"
          max="100"
          name="water"
          value={planet.water}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="water"
          value={planet.water}
          onChange={handleInputChange}
        />
      </div>

      <div className="control2">
        <label htmlFor="co2">CO2 (% of atmosphere)</label>
        <input
          type="range"
          id="co2"
          min="50"
          max="100"
          name="co2"
          value={planet.co2}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="co2"
          value={planet.co2}
          onChange={handleInputChange}
        />
      </div>

      <div className="control2">
        <label htmlFor="o2">O2 (% of atmosphere)</label>
        <input
          type="range"
          id="o2"
          min="1"
          max="100"
          name="o2"
          value={planet.o2}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="o2"
          value={planet.o2}
          onChange={handleInputChange}
        />
      </div>

      <div className="control2">
        <label htmlFor="luminosity">N2 (% of atmosphere)</label>
        <input
          type="range"
          id="luminosity"
          min="1"
          max="100"
          name="n2"
          value={planet.n2}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="n2"
          value={planet.n2}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default PlanetSidebar;
