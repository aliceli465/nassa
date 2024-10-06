import "../App.css";
function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">WELCOME!</h1>
      <p className="about-description">
        Exoplanets are planets that exist outside of our solar system, and
        they're insanely cool: even though the closest one is 4 light-years
        away, the amount we have learned from simple things like brightness,
        size, and atmospheric conditions has challenged us with the ultimate
        goal: to find an exoplanet that can sustain human life.
      </p>
      <br></br>
      <p className="about-description">
        Our goal for this project was to create an all-in-one-visualizer that
        helps students scratch the surface of just how many parameters influence
        an exoplanet's habitability. Everything from size, orbital speed,
        atmosphere, and even to magnetic fields, each parameter plays a role in
        habitability and the transit light curve
      </p>
    </div>
  );
}

export default About;
