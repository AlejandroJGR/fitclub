import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { TfiBlackboard } from "react-icons/tfi";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <a
          href="https://devale-portfolio.netlify.app"
          className="footer-logo"
          target="__blank"
        >
          {"<AJGR />"}
        </a>
        <img src={logo} alt="logo" />
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/alejandro-javier-gomez-ramirez-06923715a">
            <GrLinkedinOption />
          </a>
          <a href="https://github.com/AlejandroJGR">
            <GrGithub />
          </a>
          <a href="https://devale-portfolio.netlify.app">
            <TfiBlackboard />
          </a>
        </div>
      </div>
      <p>Made with 💙 by dev.alejandrojgr </p>
      <p>All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
