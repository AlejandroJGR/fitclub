import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import plansData from "../../data/plansData";

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
        {plansData.map((plan, index) => (
          <div className="plans__card" key={index}>
            <img src={plan.icon} alt="icon" className="card__title-image" />
            <p>{plan.name}</p>
            <span>{plan.price}</span>
            <div className="card__benefits">
              {plan.features.map((feature, index) => (
                <div key={index} className="tick__image">
                  <img src={whiteTick} alt="whiteTick" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
