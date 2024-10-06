import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navItems}>
        {["/", "/about", "/sources"].map((path, index) => (
          <li
            key={index}
            style={styles.navItem}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              to={path}
              style={{
                ...styles.navLink,
                background: hoveredIndex === index ? "#5f5c83" : "transparent", // Change background on hover
                transition: "background 0.3s ease", // Smooth transition
              }}
            >
              {path === "/" ? "Home" : path === "/about" ? "About" : "Sources"}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "linear-gradient(180deg, #0d0b1d 0%, #2c2a4b 100%)",
    padding: "1rem",
    zIndex: 1000,
    position: "relative", // This helps with positioning
    marginBottom: "5%",
  },
  navItems: {
    display: "flex",
    listStyle: "none",
    padding: 0,
    justifyContent: "center", // Center items horizontally
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
    padding: "10px",
    borderRadius: "5px",
    display: "block",
    transition: "background 0.3s ease", // Add smooth transition on hover
  },
};

export default Navbar;
