import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer__container">
      <a href="https://devale-portfolio.netlify.app" className="footer-logo" target="__blank">{"<AJGR />"}</a>
      <div className="footer__links">
        <img src={logo} alt="logo" />
        <a href="https://www.linkedin.com/in/alejandro-javier-gomez-ramirez-06923715a">
          linkedin
        </a>
        <a href="https://github.com/AlejandroJGR">github</a>
        <a href="https://devale-portfolio.netlify.app">portfolio</a>
      </div>
      <p>Made with 💙 by dev.alejandrojgr </p>
      <p>All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
