import React from "react";
import "./home.css";
import imgsrc from "./FOODI.png";

const Home = () => {
  return (
    <div className="home-master">
      {/* <h1 id="foodi">FOODI</h1> */}
      <div className="nav">
        <div></div>
        <a href="/login">
          <button className="auth" id="login">
            Login
          </button>
        </a>
        <a href="/register">
          <button className="auth" id="signup">
            SignUp
          </button>
        </a>
      </div>
      <img id="foodi" src={imgsrc} alt="foodi" />
    </div>
  );
};

export default Home;
