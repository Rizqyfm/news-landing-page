import React from "react";
import "./index.css";
import logo from "./assets/images/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo"></img>
      <div className="navbarLinks">
        <ol className="links">
          <li className="link">Home</li>
          <li className="link">New </li>
          <li className="link">Popular </li>
          <li className="link">Trending</li>
          <li className="link">Categories</li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
