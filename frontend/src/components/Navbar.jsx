import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navItems}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/sources" style={styles.navLink}>Sources & References</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: 'linear-gradient(180 deg, #0d0b1d 0%, #2c2a4b 100%)',
    padding: '1rem',
  },
  navItems: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
  },
  navItem: {
    padding: '0.5rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Navbar;
