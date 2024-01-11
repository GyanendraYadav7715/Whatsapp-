import React from "react";
import './Navbar.css';
 

const Navbar = () => {
  return (
    <>
      <div id="main">
  <div id="page1">
    <nav>
      {" "}
      {/* This is navbar coding */}
      <img
        src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
        alt="Logo"
      />
      <div id="nav-part2">
        <h4>
            <a href="">Register</a>
        </h4>
        <h4>
          <a href="">Work</a>
        </h4>
        <h4>
          <a href="">Sudio</a>
        </h4>
        <h4>
          <a href="">Contact</a>
        </h4>
      </div>
    </nav>
    <div id="center">
      <div id="left">
        <h2>
          Sundown is a multi-disciplinary studio focused on creating unique,
          end-to-end experiences and environments.
        </h2>
      </div>
      <div id="right">
        <h1>Business THAT INSPIRE</h1>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Navbar;
