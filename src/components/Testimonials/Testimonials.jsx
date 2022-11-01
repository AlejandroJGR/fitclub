import React from "react";
import "./Testimonials.css";
import testimonialsData from "../../data/testimonialsData";
import noise from "../../assets/noise.png";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";

function Testimonials() {
  return (
    <div className="testimonials__container">
      <span>Testimonials</span>
      <h2>What They Say About Us</h2>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonials">
          <div className="testimonial__text">
            <p>{testimonial.review}</p>
            <p>
              <span>{testimonial.name}</span> - {testimonial.status}
            </p>
          </div>

          <div className="testimonials__image">
            <img
              src={noise}
              alt="background for testimonial"
              className="bg-image__testimonial"
            />
            <img
              src={noise}
              alt="background for testimonial"
              className="bg-tr-image__testimonial"
            />
            <img
              src={testimonial.image}
              alt="testimonial"
              className="image__testimonial"
            />
          </div>
        </div>
      ))}
      <div className="testimonial__arrows">
        <button type="button">
          <img src={leftArrow} alt="left arrow" />
        </button>
        <button type="button">
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
      <div className="newsletter">
        <h1>
          <span>READY TO</span>
          LEVEL UP YOUR BODY
          <span>WITH US?</span>
        </h1>
        <form action="Post">
          <input type="email" placeholder="Write your email!" />
          <button type="submit">Join Now!</button>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;
