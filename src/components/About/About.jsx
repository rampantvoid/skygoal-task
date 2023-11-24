import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        {/* cards */}
        <img
          src="/assets/shapes/Subtract (2).svg"
          alt=""
          className="shape-7 shape"
        />
        <img
          src="/assets/shapes/Ellipse 46.svg"
          alt=""
          className="shape-8 shape"
        />
        <div className="user-card-container">
          <div className="user-card">
            <div className="user-img">
              <img src="/assets/images/avatar.png" alt="" />
            </div>
            <div className="user-information">
              <p className="user-name">jenny wilson</p>
              <p className="user-data">
                Lorem ipsum dolor sit amet consectetur adipisicing...
              </p>
            </div>
          </div>
          <div className="user-card">
            <div className="user-img">
              <img src="/assets/images/avatar.png" alt="" />
            </div>
            <div className="user-information">
              <p className="user-name">jenny wilson</p>
              <p className="user-data">
                Lorem ipsum dolor sit amet consectetur adipisicing...
              </p>
            </div>
          </div>
          <div className="user-card">
            <div className="user-img">
              <img src="/assets/images/avatar.png" alt="" />
            </div>
            <div className="user-information">
              <p className="user-name">jenny wilson</p>
              <p className="user-data">
                Lorem ipsum dolor sit amet consectetur adipisicing...
              </p>
            </div>
          </div>
        </div>

        {/* information */}

        <div className="about-information-container">
          <p
            style={{
              width: "100%",
              color: "black",
              fontFamily: "Inter",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            {" "}
            Topical Adventure <br />{" "}
            <span
              style={{
                fontSize: "30px",
                fontWeight: "400",
              }}
            >
              for Students
            </span>
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Student Tropical Vacation: Relax and Recharge
          </p>

          <ul
            style={{
              width: "100%",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>

          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
