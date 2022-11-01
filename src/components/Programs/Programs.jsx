import React from "react";
import "./Programs.css";
import dumbell from "../../assets/dumbell.svg";
import runing from "../../assets/runing.svg";
import flame from "../../assets/flame.svg";
import heartHealth from "../../assets/heartHealth.svg";

function Programs() {
  return (
    <div className="programs__container" id="programs">
      <div className="programs__title">
        <h1 className="programs__title-special">Explore Our</h1>
        <h1>Programs</h1>
        <h1 className="programs__title-special">To Shape You</h1>
      </div>
      <div className="programs__cards">
        <div className="program__card">
          <img src={dumbell} alt="dumbell" />
          <h4>Strength Training</h4>
          <p>
            In this program, you are trained to improve your strength through
            many exercises.
          </p>
          <a href="/">Join Now --{">"}</a >
        </div>
        <div className="program__card">
          <img src={runing} alt="runing" />
          <h4>Cardio Training</h4>
          <p>
            In this program, you are trained to do sequential moves in range of
            20 until 30 minutes.
          </p>
          <a href="/">Join Now --{">"}</a >
        </div>
        <div className="program__card">
          <img src={flame} alt="flame" />
          <h4>Fat Burning</h4>
          <p>
            This program is suitable for you who wants to get rid of your fat
            and lose their weight.
          </p>
          <a href="/">Join Now --{">"}</a >
        </div>
        <div className="program__card">
          <img src={heartHealth} alt="heartHealth" />
          <h4>Health Fitness</h4>
          <p>
            This programs is designed for those who exercises only for their
            body fitness not body building.
          </p>
          <a href="/">Join Now --{">"}</a >
        </div>
      </div>
    </div>
  );
}

export default Programs;
