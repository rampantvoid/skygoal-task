import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <img
          src="/assets/shapes/Ellipse 46.svg"
          alt=""
          className="shape-1 shape"
        />
        <img
          src="/assets/shapes/Ellipse 49.svg"
          alt=""
          className="shape-2 shape"
        />
        <img
          src="/assets/shapes/Ellipse 48.svg"
          alt=""
          className="shape-3 shape"
        />
        <img
          src="/assets/shapes/Subtract.svg"
          alt=""
          className="shape-4 shape"
        />
        <img
          src="/assets/shapes/Ellipse 47.svg"
          alt=""
          className="shape-5 shape"
        />
        <img
          src="/assets/shapes/Subtract (1).svg"
          alt=""
          className="shape-6 shape"
        />
        {/* text part */}
        <div className="text-container">
          <p className="sub-text">Discover the beauty of the tropics</p>
          <p className="main-text">
            tropical destination <br />
            <span className="main-2-text">for students</span>
          </p>
          <p className="detail-text">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae{" "}
          </p>

          <button className="sign-up-btn">sign up</button>
        </div>

        {/* image part */}
        <div className="img-container">
          <img
            src="/assets/images/Group 171.png"
            alt=""
            className="home-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
