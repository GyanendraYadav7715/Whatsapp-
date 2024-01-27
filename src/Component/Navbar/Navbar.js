import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <div id="logo">
            <div id="logo-text">
              <h2>
                Start-Up <span>Way24</span>
              </h2>
            </div>
            <div id="logo-gola"></div>
          </div>
        </Link>
        <div id="nav-part2">
          <h4>
            <Link to="/register">Register</Link>
          </h4>
          <h4>
            <Link to="/upload">Work</Link>
          </h4>
          <h4>
            <Link to="/main">Sudio</Link>
          </h4>
          <h4>
            <Link to="/contact">Contact</Link>
          </h4>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
