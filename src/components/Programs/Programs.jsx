import React from "react";
import "./Programs.css";
import programsData from "../../data/programsData";

function Programs() {
  return (
    <div className="programs__container" id="programs">
      <div className="programs__title">
        <h1 className="programs__title-special">Explore Our</h1>
        <h1>Programs</h1>
        <h1 className="programs__title-special">To Shape You</h1>
      </div>
      <div className="programs__cards">
        {programsData.map((program, index) => (
          <div className="program__card" key={index}>
            <img src={program.image} alt="icon" />
            <h4>{program.heading}</h4>
            <p>{program.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
