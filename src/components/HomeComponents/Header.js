import React from "react";
import { StyledLink } from "../StyledCompo";
import "./Header.css";

function Header() {
  return (
    <div id="Head">
      <img id="logo" src="Images/logo.jpg" alt="logo" />
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
}

export default Header;
