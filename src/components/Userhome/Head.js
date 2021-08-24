import React from "react";
import LogOut from "../logOut";
import "./Head.css";
import imgsrc from "./Logo.png";

export default function Head() {
  return (
    <div className="head-master">
      <h1 className="brand">
        <img className="foodiLogo" src={imgsrc} alt="foodiLogo" />
      </h1>
      <LogOut />
    </div>
  );
}
