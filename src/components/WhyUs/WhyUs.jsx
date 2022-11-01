import React from "react";
import "./WhyUs.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import nb from "../../assets/nb.png";
import tick from "../../assets/tick.png";

function WhyUs() {
  return (
    <div className="whyus__container" id="whyus">
      <div className="whyus__images">
        <div className="larger_image">
          <img src={image1} alt="gym bro1" />
        </div>
        <div className="smaller_images">
          <img src={image2} alt="gym bro2" />
          <img src={image3} alt="gym bro3" />
          <img src={image4} alt="gym bro4" />
        </div>
      </div>
      <div className="whyus__content">
        <p>Some Reasons</p>
        <h2>
          Why <span>Choose</span> Us
        </h2>
        <p>
          <img src={tick} alt="tick" />
          OVER 140+ EXPERT COACHS
        </p>
        <p>
          <img src={tick} alt="tick" />
          TRAIN SMARTER AND FASTER THAN BEFORE
        </p>
        <p>
          <img src={tick} alt="tick" />1 FREE PROGRAM FOR NEW MEMBER
        </p>
        <p>
          <img src={tick} alt="tick" />
          RELIABLE PARTNERS
        </p>
        <div className="whyus__partnets">
          <img src={nb} alt="nb logo" />
          <img src={nike} alt="nike logo" />
          <img src={adidas} alt="adidas logo" />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
