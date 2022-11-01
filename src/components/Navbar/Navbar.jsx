import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__menu">
        <a href="#header">Home</a>
        <a href="#programs">Programs</a>
        <a href="#whyus">Why Us</a>
        <a href="#plans">Plans</a>
        <a href="/">Testimonials</a>
      </div>
      <button className="navbar__button">Join Now</button>
    </div>
  );
}

export default Navbar;
