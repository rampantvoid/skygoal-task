import React from "react";
import "./Discount.css";

const Discount = () => {
  return (
    <div className="discount-container">
      <div className="discount-wrapper">
        <img
          src="/assets/shapes/Subtract (2).svg"
          alt=""
          className="shape-9 shape"
        />
        <img
          src="/assets/shapes/Ellipse 46.svg"
          alt=""
          className="shape-10 shape"
        />
        <img
          src="/assets/shapes/Ellipse 49.svg"
          alt=""
          className="shape-11 shape"
        />
        <img
          src="/assets/shapes/Subtract (3).svg"
          alt=""
          className="shape-12 shape"
        />
        <img
          src="/assets/shapes/Ellipse 54.svg"
          alt=""
          className="shape-13 shape"
        />
        {/* information */}

        <div className="discount-information-container">
          <p
            style={{
              color: "#1F2027",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "10px   ",
            }}
          >
            Get 20% off for student
          </p>
          <p
            style={{
              color: "black",
              fontFamily: "Inter",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            {" "}
            Student discounts available.
            <br />{" "}
            <span
              style={{
                fontSize: "30px",
                fontWeight: "400",
              }}
            >
              Get ready for some fun in the sun!
            </span>
          </p>

          <ul
            style={{
              marginTop: "30px",
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

        {/* image part */}
        <div className="img-container">
          <img
            src="/assets/images/Mask group.png"
            alt=""
            className="discount-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
