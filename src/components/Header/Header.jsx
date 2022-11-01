import React from "react";
import "./Header.css";
import headerImg from "../../assets/hero_image.png";
import headerImgBg from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__blur-bg" />
      <div className="header__left">
        <div className="header__slogan">
          <div className="header__slogan-special" />
          <p>The Best Fitness Club in Town</p>
        </div>
        <h1 className="header__title">
          <span className="header__title_special">Shape</span> Your Ideal Body
        </h1>
        <p className="header__text">
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </p>
        <div className="header__numbers">
          <div className="header__figures">
            <h3>+150</h3>
            <p>Expert Coaches</p>
          </div>
          <div className="header__figures">
            <h3>+1000</h3>
            <p>Members Joined</p>
          </div>
          <div className="header__figures">
            <h3>+50</h3>
            <p>Fitness Programs</p>
          </div>
        </div>
        <div className="header__buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right-bg" />
        <div className="heart_rate">
          <img src={heart} alt="heart" />
          <p>Heart Rate</p>
          <p>116 bpm</p>
        </div>
        <img className="header__img" src={headerImg} alt="headerImg" />
        <img
          className="header__img-bg"
          src={headerImgBg}
          alt="headerImg Background"
        />
        <div className="calories">
          <img src={calories} alt="calories" />
          <div>
            <p>Calories Burned</p>
            <p>220 kcal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
