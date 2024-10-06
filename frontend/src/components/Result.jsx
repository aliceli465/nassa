import React from "react";

function Result({
    habitability
}) {
    return (
        <div className="sidebar right">
            <h2 className="title">Habitability</h2>
            <div className="slider-container">
                <div className="slider">
                    <input type="range" min="0.1" max="3" step="0.1" value={habitability}
                        className="input" />
                    <p className="label">Habitability of your exoplanet is: {habitability}</p>
                </div>
            </div>
        </div>
    );
}

export default Result;