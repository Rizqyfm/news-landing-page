import React from "react";
import "../index.css";
import logo from "../assets/images/logo.svg";
import "./Navbar.css";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  display: flex;

  .logo {
    width: auto;
    height: 50px;
  }
`;

function Navbar() {
  return (
    <Nav className="navbar">
      <img className="logo" src={logo} alt="Logo"></img>
      <Burger />
    </Nav>
  );
}

export default Navbar;
