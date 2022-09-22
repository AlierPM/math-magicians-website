import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <nav className="nav-menu">
    <ul className="nav-items">
      <li className="nav-item link">
        <Link to="/">Home</Link>
      </li>
      <li className="line">&#8739;</li>
      <li className="nav-item link">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="line">&#8739;</li>
      <li className="nav-item link">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);
export default NavMenu;
