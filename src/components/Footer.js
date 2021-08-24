import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>
        <div className="devs">
          <div className="dev">
            <h4>Sanskar Mohapatra</h4>
            <p>Full stack Dev</p>
            <a
              href="https://www.instagram.com/__sanskar0520/"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://github.com/Sanskar0520"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sanskar-mohapatra-51215815a/"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/SanskarMohapat1"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
        <p id="copyright">ⓒ {year} Foodi All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
