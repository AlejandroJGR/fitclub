import React from "react";
import "./Plans.css";
import dumbell from "../../assets/dumbell.svg";
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans__container" id="plans">
      <div className="plans__title">
        <div className="header__blur-bg" />
        <div className="header__blur-bg2" />
        <h1>
          READY TO <span>START</span> YOUR JOURNEY <span>NOW</span> WITH US?
        </h1>
      </div>
      <div className="plans__cards-container">
        <div className="plans__card">
          <img src={dumbell} alt="dumbell" className="card__title-image" />
          <p>Premium Plan</p>
          <span>$30</span>
          <div className="card__benefits">
            <p>
              <img src={whiteTick} alt="whiteTick" />5 Hours of Exercices
            </p>
            <p>
              <img src={whiteTick} alt="whiteTick" />
              Free Couching
            </p>
            <p>
              <img src={whiteTick} alt="whiteTick" />
              Access To Minibar
            </p>
          </div>
          <a href="/">See more benefits</a>
        </div>
        <div className="plans__card">
          <img src={dumbell} alt="dumbell" className="card__title-image" />
          <p>Premium Plan</p>
          <span>$30</span>
          <div className="card__benefits">
            <p>
              <img src={whiteTick} alt="whiteTick" />5 Hours of Exercices
            </p>
            <p>
              <img src={whiteTick} alt="whiteTick" />
              Free Couching
            </p>
            <p>
              <img src={whiteTick} alt="whiteTick" />
              Access To Minibar
            </p>
          </div>
          <a href="/">See more benefits</a>
        </div>
        <div className="plans__card">
          <img src={dumbell} alt="dumbell" className="card__title-image" />
          <p>Premium Plan</p>
          <span>$30</span>
          <div className="card__benefits">
            <p>
              <img src={whiteTick} alt="whiteTick" />5 Hours of Exercices
            </p>
            <p>
              <img src={whiteTick} alt="whiteTick" />
              Free Couching
            </p>
            <p>
              <img src={whiteTick} alt="whiteTick" />
              Access To Minibar
            </p>
          </div>
          <a href="/">See more benefits</a>
        </div>
      </div>
    </div>
  );
}

export default Plans;
